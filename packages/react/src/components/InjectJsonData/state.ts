import {atom} from 'recoil';

export const jsonDataState = atom<unknown>({key: 'jsonData', default: null});
