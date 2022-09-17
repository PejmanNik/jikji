import {PageAdjustment} from 'core/splitPageContent';
import {cloneElement, RefObject} from 'react';
import {SectionChildren} from './parseSectionChildren';

export function buildPageAdjustments(
  sectionHeaderRef: RefObject<HTMLDivElement>,
  sectionFooterRef: RefObject<HTMLDivElement>,
): PageAdjustment {
  const sectionHeaderHeight =
    sectionHeaderRef.current?.getBoundingClientRect().height ?? 0;

  const sectionFooterHeight =
    sectionFooterRef?.current?.getBoundingClientRect().height ?? 0;

  // the pre-render page include the section header and footer
  // so we need to increase the height of header and footer
  // from every page available height.
  // The first page must include the section header, and the last page
  // include the section footer, so we especially decrease the height
  // for these two pages.
  return {
    every: sectionHeaderHeight + sectionFooterHeight,
    last: -1 * sectionFooterHeight,
    0: -1 * sectionHeaderHeight,
  };
}

function getHeaderFooterBuilder(
  totalPages: number,
  {pageElements, sectionElements}: SectionChildren,
  sectionHeaderRef?: RefObject<HTMLDivElement>,
  sectionFooterRef?: RefObject<HTMLDivElement>,
) {
  const buildFooter = (index: number) => {
    if (index + 1 === totalPages && sectionElements.footer) {
      return (
        <>
          {pageElements.footer}
          {!sectionFooterRef && sectionElements.footer}
          {sectionFooterRef &&
            cloneElement(sectionElements.footer, {
              ...sectionElements.footer.props,
              ref: sectionFooterRef,
            })}
        </>
      );
    }

    return pageElements.footer;
  };

  const buildHeader = (index: number) => {
    if (index === 0 && sectionElements.header) {
      return (
        <>
          {!sectionHeaderRef && sectionElements.header}
          {sectionHeaderRef &&
            cloneElement(sectionElements.header, {
              ...sectionElements.header.props,
              ref: sectionHeaderRef,
            })}
          {pageElements.header}
        </>
      );
    }

    return pageElements.header;
  };

  return {
    buildHeader,
    buildFooter,
  };
}

export default getHeaderFooterBuilder;
