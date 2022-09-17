import log, {LogFlag} from 'core/log';
import {useEffect} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilSnapshot} from 'recoil';

function RecoilDebugger() {
  const getRecoilValueInfo = useGetRecoilValueInfo_UNSTABLE();
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    for (const node of snapshot.getNodes_UNSTABLE()) {
      // prettier-ignore
      log.debug(node.key, {value: snapshot.getLoadable(node).contents}, [LogFlag.Recoil]);
    }
  }, [getRecoilValueInfo, snapshot]);

  return null;
}

export default RecoilDebugger;
