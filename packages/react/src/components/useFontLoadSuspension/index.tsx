import {useEffect} from 'react';
import useLayoutSuspension from 'components/useLayoutSuspension/index';
import {systemSuspensionKey} from 'components/useLayoutSuspension/state';

function useFontLoadSuspension() {
  const {release} = useLayoutSuspension(`${systemSuspensionKey}_FONTS`);

  useEffect(() => {
    document.fonts.ready.then(() => {
      release();
    });
  }, [release]);
}

export default useFontLoadSuspension;
