import * as ReactDom from 'react-dom';
import type { Fiber } from 'react-reconciler';
import PageContent from 'components/PageContent';
import { ReportPlugin } from 'core/engine/plugin';
import { isInstanceOfComponent } from 'core/reactTypeHelper';
import { fiberToPulpTree } from './fiberToPulpTree';
import { getChildren } from './treeHelper';

export function makePulpTree(
  element: HTMLDivElement,
  plugins: Readonly<ReportPlugin[]>,
) {
  // ⚠️ This is dangerous action and can break anytime
  // accessing internal React Fiber API.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getInstanceFromNode = (ReactDom as any)
    .__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.Events[0];

  const fiberRoot = getInstanceFromNode?.(element);

  if (!fiberRoot) {
    throw Error(
      'this version of React is not supported, please fill an issue on GitHub',
    );
  }

  const pageContentFiber = findPageContentFiber([fiberRoot]);
  if (!pageContentFiber) {
    throw Error(
      "can't find the `PageContent` component, make sure you follow the documents.",
    );
  }

  return fiberToPulpTree(pageContentFiber, '1.', plugins);
}

export function findPageContentFiber(fiber: Fiber[]): Fiber | null {
  for (let i = 0; i < fiber.length; i++) {
    if (isInstanceOfComponent(fiber[i].elementType, PageContent)) {
      return fiber[i];
    }

    // find PageContent in the fiber children
    const children = getChildren(fiber[i]);
    if (!children) {
      continue;
    }

    const nestedResult = findPageContentFiber(children);
    if (nestedResult) return nestedResult;
  }

  return null;
}
