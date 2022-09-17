import {createContext} from 'react';

interface PageInfo {
  pageNumber: number;
  totalPages: number;
}

export const PageContext = createContext<PageInfo>({
  pageNumber: 0,
  totalPages: 0,
});
