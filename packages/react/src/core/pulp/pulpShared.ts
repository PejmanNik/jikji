import { HostTextPulp } from "./HostTextPulp";
import { Pulp } from "./pulpTypes";

export function hasRenderedWithForceVisit(rendered: Pulp[] | null): boolean {
    if (!rendered) return false;

    for (const pulp of rendered) {
        if (!(pulp instanceof HostTextPulp) && pulp.isForceToVisit) {
            return true;
        }
    }

    return false;
}