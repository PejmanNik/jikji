import {useContext, useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {SectionContext} from './context';
import {SectionPageInfo, sectionsState} from './state';

export function useSetSectionInfo(totalPages: number, readyForPrint: boolean) {
  const {id} = useContext(SectionContext);
  const setSectionInfo = useSetRecoilState(sectionsState);

  useEffect(() => {
    setSectionInfo(state => {
      const result = new Map<number, SectionPageInfo>(state);
      result.set(id, {totalPages, readyForPrint});
      return result;
    });
  }, [id, readyForPrint, setSectionInfo, totalPages]);
}
