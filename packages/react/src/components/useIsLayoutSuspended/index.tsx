import {useContext, useEffect} from 'react';
import {
  layoutSuspensionByKeyState,
  systemSuspensionKey,
  layoutSuspensionState,
  isLayoutSuspendedState,
} from 'components/useLayoutSuspension/state';
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from 'recoil';
import debugHelper from 'core/debugHelper';
import {SectionContext} from 'components/Section/context';

function useIsLayoutSuspended() {
  const {id} = useContext(SectionContext);
  const isLayoutSuspended = useRecoilValue(isLayoutSuspendedState(id));
  const resetter = useResetRecoilState(layoutSuspensionState(id));
  const setSuspension = useSetRecoilState(
    layoutSuspensionByKeyState({sectionId: id, key: systemSuspensionKey}),
  );
  useEffect(() => {
    if (debugHelper.pauseEngine) {
      return;
    }

    setSuspension(false);
    return () => resetter();
  }, [resetter, setSuspension]);

  return isLayoutSuspended;
}

export default useIsLayoutSuspended;
