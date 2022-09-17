import { atom } from 'recoil';

export interface SectionPageInfo {
  totalPages: number;
  readyForPrint: boolean,
}

export const sectionsState = atom<Map<number, SectionPageInfo>>({
  key: 'sections',
  default: new Map<number, SectionPageInfo>(),
});
