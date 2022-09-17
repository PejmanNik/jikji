import {PageDimension, PageOrientation} from 'core/pageType';

function adjustDimension(
  dimension: PageDimension,
  orientation: PageOrientation,
): PageDimension {
  if (orientation === 'landscape') {
    return {height: dimension.width, width: dimension.height};
  }

  return dimension;
}

export default adjustDimension;
