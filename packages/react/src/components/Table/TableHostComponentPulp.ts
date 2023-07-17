import { createElement, ReactElement, ReactNode } from 'react';
import { DomBoxInfo, HostComponentPulpProps, HostComponentPulp } from "core/pulp/HostComponentPulp";
import { Pulp, PulpState } from 'core/pulp/pulpTypes';
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
        state: PulpState | null,
        header?: HostComponentPulp,
        footer?: HostComponentPulp
    ) {
        super(id, elementType, props, domNode, domBoxInfo, rendered, state);
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
            pulp.state,
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
        state: PulpState | null
    }>) {
        return new TableHostComponentPulp(
            this.id,
            this.elementType,
            mergeProps(newProps.rendered, this.props, newProps.props),
            this.domNode,
            newProps.domBoxInfo ?? this.domBoxInfo,
            merge(this.rendered, newProps.rendered),
            merge(this.state, newProps.state),
            this.header,
            this.footer
        );
    }
}