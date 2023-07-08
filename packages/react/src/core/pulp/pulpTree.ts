import * as ReactDom from 'react-dom';
import type { Fiber } from 'react-reconciler';
import PageContent from 'components/PageContent';
import { ReportPlugin } from 'core/engine/plugin';
import { isInstanceOfComponent } from 'core/reactTypeHelper';
import { fiberToPulpTree } from './fiberToPulpTree';
import { getChildren } from './treeHelper';

// ⚠️ This is dangerous action and can break anytime
// accessing internal React Fiber API.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getInstanceFromNode = (ReactDom as any)
  .__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.Events[0];


//https://github.com/facebook/react/packages/react-reconciler/src/ReactWorkTags.js
const HostRoot = 3;

function isContainerMarkedAsRoot(fiber?: Fiber): boolean {
  return fiber?.tag === HostRoot;
}

function findRootFiberNode(parentElement?: Element): Fiber | null {
  const element = parentElement ?? document;

  const fiber = getInstanceFromNode(element);
  if (isContainerMarkedAsRoot(fiber)) {
    return fiber;
  }

  for (const child of Array.from(element.children)) {
    const result = findRootFiberNode(child);
    if (result !== null) {
      return result;
    }
  }

  return null;
}

export function makePulpTree(contentElement: HTMLDivElement, plugins: Readonly<ReportPlugin[]>,
) {
  const fiberRoot = findRootFiberNode();

  if (!fiberRoot) {
    throw Error(
      'this version of React is not supported, please fill an issue on GitHub',
    );
  }

  const pageContentFiber = findPageContentFiber(contentElement, [fiberRoot]);
  if (!pageContentFiber) {
    throw Error(
      "can't find the `PageContent` component, make sure you follow the documents.",
    );
  }

  return fiberToPulpTree(pageContentFiber, '1.', plugins);
}

export function findPageContentFiber(contentElement: HTMLDivElement, fiber: Fiber[]): Fiber | null {
  for (let i = 0; i < fiber.length; i++) {    
    if (fiber[i].elementType 
      && isInstanceOfComponent(fiber[i].elementType, PageContent) 
      && fiber[i].return?.stateNode == contentElement) {    
        return fiber[i];
    }

    // find PageContent in the fiber children
    const children = getChildren(fiber[i]);
    if (!children) {
      continue;
    }

    const nestedResult = findPageContentFiber(contentElement, children);
    if (nestedResult) return nestedResult;
  }

  return null;
}
