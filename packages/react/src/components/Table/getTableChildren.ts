import { HostComponentPulp } from "core/pulp/HostComponentPulp";
import { isHostComponentElementType } from "core/pulp/pulpHelpers";
import { ComponentPulp } from 'core/pulp/ComponentPulp';

export interface TableChildren {
    header?: HostComponentPulp;
    body: HostComponentPulp;
    footer?: HostComponentPulp;
}

export function getTableChildren(tablePulp: HostComponentPulp | ComponentPulp) {

    return {
        header: tablePulp.rendered?.find(isHostComponentElementType('thead')),
        body: tablePulp.rendered?.find(isHostComponentElementType('tbody')),
        footer: tablePulp.rendered?.find(isHostComponentElementType('tfoot')),
    };
}
