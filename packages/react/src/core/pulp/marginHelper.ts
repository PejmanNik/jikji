import {ComponentPulp} from './ComponentPulp';
import type {HostComponentPulp} from './HostComponentPulp';
import {Pulp, PulpType} from './pulpTypes';

export interface MarginInfo {
  marginTopWithCollapse: number;
  marginTopWithNestedCollapse: number;
  marginBottomWithCollapse: number;
}

export function buildMarginsInfo(
  pulp: HostComponentPulp,
  parent: HostComponentPulp | ComponentPulp,
) {
  //TODO: it will always collapse, need to react to css display property
  //eg: flex doesn't collapse
  const marginTopWithNestedCollapse = getMarginTopWithNestedCollapse(pulp);
  const marginTopWithCollapse = getMarginTopWithSiblingCollapse(
    parent,
    pulp,
    marginTopWithNestedCollapse,
  );
  const marginBottomWithCollapse = getMarginBottomWithNestedCollapse(pulp);

  return {
    marginTopWithCollapse,
    marginTopWithNestedCollapse,
    marginBottomWithCollapse,
  };
}

export function getMarginTopWithSiblingCollapse(
  parent: HostComponentPulp | ComponentPulp,
  pulp: HostComponentPulp,
  marginTopWithNestedCollapse: number = getMarginTopWithNestedCollapse(pulp),
): number {
  const pulpTopMargin = marginTopWithNestedCollapse;
  const index = parent.rendered?.indexOf(pulp) ?? -1;

  if (index <= 0 || !parent.rendered || parent.rendered?.length < index - 1) {
    return pulpTopMargin;
  }

  const reverseSiblings = [...parent.rendered.slice(0, index)].reverse();
  const previousSibling = getPreviousSibling(reverseSiblings);

  const previousSiblingBottomMargin = previousSibling
    ? getMarginBottomWithNestedCollapse(previousSibling)
    : 0;

  return Math.max(0, pulpTopMargin - previousSiblingBottomMargin);
}

function getPreviousSibling(
  previousSiblings: Pulp[],
): HostComponentPulp | null {
  for (const pulp of previousSiblings) {
    if (pulp.type === PulpType.HostComponent) {
      return pulp;
    } else if (pulp instanceof ComponentPulp && !!pulp.rendered) {
      const reverseSiblings = [...pulp.rendered].reverse();
      const result = getPreviousSibling(reverseSiblings);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

export function getMarginTopWithNestedCollapse(
  pulp: HostComponentPulp,
): number {
  const margins: number[] = [];
  getNestedMarginTop(pulp, margins);

  return Math.max(...margins);
}

export function getNestedMarginTop(
  pulp: HostComponentPulp | ComponentPulp,
  margins: number[],
): boolean {
  let result = false;
  if (pulp.type === PulpType.HostComponent) {
    margins.push(pulp.domBoxInfo.marginTop);
    result = true;
  }

  if (!pulp.rendered) {
    return result;
  }

  for (const child of pulp.rendered) {
    if (
      child.type === PulpType.Component ||
      child.type === PulpType.HostComponent
    ) {
      if (getNestedMarginTop(child, margins)) {
        break;
      }
    }
  }

  return result;
}

export function getMarginBottomWithNestedCollapse(
  pulp: HostComponentPulp,
): number {
  const margins: number[] = [];
  getNestedBottomMargin(pulp, margins);

  return Math.max(...margins);
}

function getNestedBottomMargin(
  pulp: HostComponentPulp | ComponentPulp,
  margins: number[],
): boolean {
  let result = false;
  if (pulp.type === PulpType.HostComponent) {
    margins.push(pulp.domBoxInfo.marginBottom);
    result = true;
  }

  if (!pulp.rendered) {
    return result;
  }

  const rendered = [...pulp.rendered].reverse();
  for (const child of rendered) {
    if (
      child.type === PulpType.Component ||
      child.type === PulpType.HostComponent
    ) {
      if (getNestedBottomMargin(child, margins)) {
        break;
      }
    }
  }

  return result;
}
