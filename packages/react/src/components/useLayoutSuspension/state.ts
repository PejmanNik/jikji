import {atomFamily, selector, selectorFamily} from 'recoil';

// it will keep the the layout suspended by default, so
// the child component can add suspension and it will
// automatically released after section has been render
// hopefully this key will not be used by users :)
export const systemSuspensionKey = '\u00A0\u00D8\u00A0';

export const layoutSuspensionState = atomFamily({
  key: 'layoutSuspension',
  default: {
    keys: [systemSuspensionKey],
    suspended: [systemSuspensionKey],
  },
});

interface LayoutSuspenseKey {
  key: string;
  sectionId: number;
}

export const layoutSuspensionByKeyState = selectorFamily<
  boolean,
  Readonly<LayoutSuspenseKey>
>({
  key: 'layoutSuspensionByKey',
  get: () => () => false,
  set:
    ({key, sectionId}) =>
    ({set, get}, newSuspenseStatus) => {
      const layoutSuspension = get(layoutSuspensionState(sectionId));
      const isProcessed = layoutSuspension.keys.includes(key);
      const isSuspended = layoutSuspension.suspended.includes(key);

      if (newSuspenseStatus && !isProcessed && !isSuspended) {
        set(layoutSuspensionState(sectionId), {
          suspended: [...layoutSuspension.suspended, key],
          keys: [...layoutSuspension.keys, key],
        });
      } else if (!newSuspenseStatus && isSuspended) {
        set(layoutSuspensionState(sectionId), {
          suspended: layoutSuspension.suspended.filter(x => x !== key),
          keys: layoutSuspension.keys,
        });
      }
    },
});

export const isGlobalLayoutSuspendedState = selector<boolean>({
  key: 'isGlobalLayoutSuspended',
  get: ({get}) => {
    const layoutSuspension = get(layoutSuspensionState(0));
    // length - 1 => systemSuspensionKey is exist as default but
    // we don't need it for the global suspension state
    return layoutSuspension.suspended.length - 1 > 0;
  },
});

export const isLayoutSuspendedState = selectorFamily<boolean, number>({
  key: 'isLayoutSuspended',
  get:
    sectionId =>
    ({get}) => {
      const isGlobalLayoutSuspended = get(isGlobalLayoutSuspendedState);
      const sectionSuspension = get(layoutSuspensionState(sectionId));

      return sectionSuspension.suspended.length > 0 || isGlobalLayoutSuspended;
    },
});
