import {PageMargin} from './pageType';

export function shorthand(margin: PageMargin) {
  return `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`;
}
