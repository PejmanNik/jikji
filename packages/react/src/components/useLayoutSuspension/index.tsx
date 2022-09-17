import {useLayoutEffect, useMemo} from 'react';
import {useSetRecoilState} from 'recoil';
import {useContext} from 'react';
import {SectionContext} from 'components/Section/context';
import {layoutSuspensionByKeyState} from './state';

function useLayoutSuspension(key: string) {
  const {id} = useContext(SectionContext);
  const setSuspension = useSetRecoilState(
    layoutSuspensionByKeyState({sectionId: id, key}),
  );

  useLayoutEffect(() => {
    setSuspension(true);
  }, [setSuspension]);

  const result = useMemo(
    () => ({
      release: () => {
        setSuspension(false);
      },
    }),
    [setSuspension],
  );

  return result;
}

export default useLayoutSuspension;
