import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {sectionsState} from 'components/Section/state';

function ReadyForPrintStatus() {
  const sectionsInfo = useRecoilValue(sectionsState);

  useEffect(() => {
    const sections = [...sectionsInfo.values()];
    
    if (sections.length > 0 && sections.every(x => x.readyForPrint)) {
      window.__jikji_isReady = true;
    }
  }, [sectionsInfo]);

  return null;
}

export default ReadyForPrintStatus;
