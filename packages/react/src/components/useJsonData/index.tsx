import {jsonDataState} from 'components/InjectJsonData/state';
import {useRecoilValue} from 'recoil';

function useJsonData<DataModel>(): DataModel {
  const data = useRecoilValue(jsonDataState);
  return data as DataModel;
}

export default useJsonData;
