import {ReactNode, useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {jsonDataState} from './state';
import readJsonDataFile from './readJsonDataFile';

export interface InjectJsonDataProp {
  children: ReactNode;
  defaultValue?: unknown;
}

function InjectJsonData({defaultValue, children}: InjectJsonDataProp) {
  const setDataFile = useSetRecoilState(jsonDataState);
  const [isSuspended, setIsSuspended] = useState(false);

  useEffect(() => {
    readJsonDataFile(defaultValue)
      .then(jsonData => {
        setDataFile(jsonData);
        setIsSuspended(false);
      })
      .catch((error: Error) => {
        throw new Error('Error in reading json data file, ' + error.message);
      });
  }, [defaultValue, setDataFile]);

  if (isSuspended) {
    return null;
  } else {
    return <>{children}</>;
  }
}

export default InjectJsonData;
