import { ReportPlugin } from "core/engine/plugin";
import { isHostComponentElementType } from "core/pulp/pulpHelpers";
import { ComponentPulp } from 'core/pulp/ComponentPulp';
import { TableHostComponentPulp } from './TableHostComponentPulp';
import { getTableChildren } from './getTableChildren';
import { freezeColumnWidth, makeRowsUnbreakable } from "./utils";
import Table from "./index";

export const tablePlugin: ReportPlugin = {
    component: Table,
    build: pulp => {
        if (!(pulp instanceof ComponentPulp)) {
            return pulp;
        }

        const tablePulp = pulp.rendered?.at(0);
        if (!isHostComponentElementType('table')(tablePulp))
            return pulp;

        const children = getTableChildren(tablePulp);
        if (!children.body || (!children.footer && !children.header))
            return pulp;


        // change our Table React component children (HTML table component) with a custom Pulp
        // to overate the split and layout behavior for HTML table component
        return pulp.clone({
            rendered: [TableHostComponentPulp.FromPulp(tablePulp, {
                header: freezeColumnWidth(children.header),
                body: makeRowsUnbreakable(children.body),
                footer: children.footer,
            })],
            component: null,
        });
    }
};


