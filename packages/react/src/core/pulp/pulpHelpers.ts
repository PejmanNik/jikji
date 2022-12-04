import { ComponentPulp, ComponentPulpProps } from "./ComponentPulp";
import { HostComponentPulpProps, HostComponentPulp } from "./HostComponentPulp";
import { Pulp } from "./pulpTypes";

export function isHostComponentPulp(pulp: Pulp): pulp is HostComponentPulp {
    return pulp instanceof HostComponentPulp;
}

export function isComponentPulp(pulp: Pulp): pulp is ComponentPulp {
    return pulp instanceof ComponentPulp;
}

export function isElementType(pulp: Pulp | undefined | null, type: string): pulp is ComponentPulp | HostComponentPulp {
    if (!pulp)
        return false;

    if (!(pulp instanceof HostComponentPulp) && !(pulp instanceof ComponentPulp))
        return false;

    return pulp.elementType === type;
}


export function isHostComponentElementType(type: string) {
    return function (pulp?: Pulp): pulp is HostComponentPulp {
        if (!pulp)
            return false;

        if (!pulp || !(pulp instanceof HostComponentPulp))
            return false;

        return pulp.elementType === type;
    }
}

// undefined = ignore property in merge
// null = set property to null
export type ExplicitPartial<T> = { [P in keyof T]?: T[P] | undefined | null; }

export function merge<T>(base: T, newValue: T | undefined | null): T | null {
    return newValue === null ? null : newValue ?? base;
}

export function mergeProps<T extends HostComponentPulpProps | ComponentPulpProps>(
    rendered: Pulp[] | undefined | null,
    base: T,
    newProps: T | undefined | null): T {

    const props = newProps ?? base;
   
    // in order to keep the react builtin component when
    // we use props.children to make the pulp component
    // and avoid touch the element.
    // If we change the rendered, we need to update the 
    // props.children for component creation

    // why ignoring null? check the ExplicitPartial
    return rendered !== undefined ?
        {
            ...props,
            children: rendered?.map(x => x.component)
        }
        : props;
}