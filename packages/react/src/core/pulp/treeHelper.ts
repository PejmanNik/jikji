import type { Fiber } from 'react-reconciler';

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

export function getChildren(fiber: Fiber): Fiber[] {  
  const siblings = getSiblings(fiber.child);
  if (!fiber.child) return siblings;
  
  return [fiber.child, ...siblings];
}
