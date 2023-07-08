import { createElement, ReactElement, ReactNode } from 'react';
import { DomBoxInfo, HostComponentPulpProps, HostComponentPulp } from "core/pulp/HostComponentPulp";
import { Pulp } from 'core/pulp/pulpTypes';
import { ExplicitPartial, merge, mergeProps } from 'core/pulp/pulpHelpers';
import { TableChildren } from './getTableChildren';


export class TableHostComponentPulp extends HostComponentPulp {

    readonly header?: HostComponentPulp;
    readonly footer?: HostComponentPulp;
    readonly component: ReactElement;

    public constructor(
        id: string,
        elementType: string,
        props: HostComponentPulpProps,
        domNode: Element,
        domBoxInfo: DomBoxInfo,
        rendered: Pulp[] | null,
        version: number,
        header?: HostComponentPulp,
        footer?: HostComponentPulp
    ) {
        super(id, elementType, props, domNode, domBoxInfo, rendered, version);
        this.header = header;
        this.footer = footer;
        this.component = this.createComponent(props, rendered?.[0]?.component ?? props.children);
    }

    static FromPulp(pulp: HostComponentPulp, tableChildren: TableChildren) {
        const headerHeight = tableChildren.header?.getHeightInfo(pulp).fullHeight ?? 0;
        const footerHeight = tableChildren.footer?.getHeightInfo(pulp).fullHeight ?? 0;

        const domBoxInfo: DomBoxInfo = {
            ...pulp.domBoxInfo,
            offset: {
                element: headerHeight + footerHeight,
                split: headerHeight + footerHeight
            }
        };

        return new TableHostComponentPulp(
            pulp.id,
            pulp.elementType,
            pulp.props,
            pulp.domNode,
            domBoxInfo,
            [tableChildren.body],
            pulp.version,
            tableChildren.header,
            tableChildren.footer);
    }

    protected createComponent(
        props: HostComponentPulpProps,
        children?: ReactNode
    ): ReactElement {
        const validProps = { ...props, 'data-id': this.id };
        delete validProps.children;

        return createElement(this.elementType, validProps,
            [
                this.header?.component,
                children,
                this.footer?.component
            ]);
    }

    public clone(newProps: ExplicitPartial<{
        props: HostComponentPulpProps,
        domBoxInfo: DomBoxInfo,
        rendered: Pulp[] | null,
        version: number,
    }>) {
        return new TableHostComponentPulp(
            this.id,
            this.elementType,
            mergeProps(newProps.rendered, this.props, newProps.props),
            this.domNode,
            newProps.domBoxInfo ?? this.domBoxInfo,
            merge(this.rendered, newProps.rendered),
            newProps.version ?? this.version,
            this.header,
            this.footer
        );
    }
}