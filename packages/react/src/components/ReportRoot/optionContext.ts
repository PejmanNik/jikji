import {ReportPlugin} from 'core/engine/plugin';
import idGenerator from 'core/idGenerator';
import {createContext} from 'react';

export interface Option {
  plugins: ReportPlugin[];
  idGenerator: ReturnType<typeof idGenerator>;
}

export const OptionContext = createContext<Option>({
  plugins: [],
  idGenerator: (function* () {
    return 1;
  })(),
});
