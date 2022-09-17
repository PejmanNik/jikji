import {createContext} from 'react';
import {PageDimension, PageMargin} from 'core/pageType';

interface SectionInfo {
  id: number;
  dimension: PageDimension;
  margin: PageMargin;
}

export const SectionContext = createContext<SectionInfo>({
  id: 0,
  dimension: {height: '0px', width: '0px'},
  margin: {top: '0px', right: '0px', bottom: '0px', left: '0px'},
});
