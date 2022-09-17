import type {Fiber} from 'react-reconciler';

export function getSiblings(fiberRoot: Fiber | null) {
  const result: Fiber[] = [];
  if (!fiberRoot) return result;

  let fiber: Fiber | null = fiberRoot.sibling;
  while (fiber != null) {
    result.push(fiber);
    fiber = fiber.sibling;
  }
  return result;
}

export function getChildren(fiber: Fiber) {
  if (!fiber.child) return null;

  const siblings = getSiblings(fiber.child);
  if (siblings.length === 0) {
    return [fiber.child];
  }
  return [fiber.child, ...siblings];
}
