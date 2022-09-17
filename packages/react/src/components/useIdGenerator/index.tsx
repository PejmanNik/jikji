import {OptionContext} from 'components/ReportRoot/optionContext';
import {useContext, useRef} from 'react';

function useIdGenerator() {
  const {idGenerator} = useContext(OptionContext);
  const idRef = useRef(idGenerator.next().value);
  return idRef.current;
}

export default useIdGenerator;
