import {buildPulpByPlugins, ReportPlugin} from 'core/engine/plugin';
import type {Fiber} from 'react-reconciler';
import {ComponentPulp} from './ComponentPulp';
import {HostComponentPulp} from './HostComponentPulp';
import {HostTextPulp} from './HostTextPulp';
import {Pulp} from './pulpTypes';
import WorkTags from './reactWorkTags';
import {getChildren} from './treeHelper';

export function getElementChild(domNode: unknown, index: number) {
  if (!(domNode instanceof Element)) {
    throw new Error(`Expect an Element but received unknown`);
  }

  if (domNode.childNodes.length < index + 1) {
    throw new Error(
      `Accessing index ${index + 1} from child nodes when len of ${
        domNode.childNodes.length
      }`,
    );
  }

  const child = domNode.childNodes.item(index);

  // text node
  if (child.nodeType !== 3) {
    throw new Error(
      `Expect a text node but received node type ${child.nodeType}`,
    );
  }

  return child as Text;
}

export function childrenPropsToFiber(fiber: Fiber) {
  const children = fiber.memoizedProps.children;
  if (typeof children === 'string') {
    return [
      HostTextPulp.fromChildrenProps(
        children,
        getElementChild(fiber.stateNode, 0),
      ),
    ];
  } else if (Array.isArray(children) && children.length > 0) {
    return children.map((value, index) =>
      HostTextPulp.fromChildrenProps(
        value,
        getElementChild(fiber.stateNode, index),
      ),
    );
  }

  return null;
}

export function getHostComponentChildren(
  fiber: Fiber,
  key: string,
  plugins: Readonly<ReportPlugin[]>,
) {
  const children = childrenToPulpTree(fiber, key, plugins);
  if (!children && fiber.memoizedProps.children) {
    return childrenPropsToFiber(fiber);
  }

  return children;
}

export function childrenToPulpTree(
  fiber: Fiber,
  key: string,
  plugins: Readonly<ReportPlugin[]>,
) {
  return (
    getChildren(fiber)?.map((fiber, index) =>
      fiberToPulpTree(fiber, key + index + '.', plugins),
    ) ?? null
  );
}

export function fiberToPulpTree(
  fiber: Fiber,
  key: string,
  plugins: Readonly<ReportPlugin[]>,
): Pulp {
  switch (fiber.tag) {
    case WorkTags.ContextProvider:
    case WorkTags.ContextConsumer:
    case WorkTags.Mode:
    case WorkTags.Profiler:
    case WorkTags.ForwardRef:
    case WorkTags.MemoComponent:
    case WorkTags.IncompleteClassComponent:
    case WorkTags.ScopeComponent:
    case WorkTags.ClassComponent:
    case WorkTags.FunctionComponent:
    case WorkTags.SimpleMemoComponent:
    case WorkTags.Fragment: {
      const pulp = ComponentPulp.fromFiber(
        fiber,
        key,
        childrenToPulpTree(fiber, key, plugins),
      );
      return buildPulpByPlugins(plugins, pulp);
    }

    case WorkTags.HostComponent: {
      const pulp = HostComponentPulp.fromFiber(
        fiber,
        key,
        getHostComponentChildren(fiber, key, plugins),
      );
      return buildPulpByPlugins(plugins, pulp);
    }

    case WorkTags.HostText:
      return HostTextPulp.fromFiber(fiber);

    default:
      throw new Error(`pulp can't handle nodes with tag=${fiber.tag}`);
  }
}
