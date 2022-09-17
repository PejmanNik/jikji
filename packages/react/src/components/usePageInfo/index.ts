import {PageContext} from 'components/Page/context';
import {SectionContext} from 'components/Section/context';
import {sectionsState} from 'components/Section/state';
import {useContext} from 'react';
import {useRecoilCallback} from 'recoil';

// there are two sources for total pages, the one inside
// PageContext is for direct access from the section's children
// and the other one in Recoil atom is for other sections access
function usePageInfo() {
  const {id, dimension, margin} = useContext(SectionContext);
  const {pageNumber, totalPages} = useContext(PageContext);

  // it will only access to previously rendered sections and
  // it doesn't need to subscribe to atom changes
  const getSectionStateById = useRecoilCallback(
    ({snapshot}) =>
      (id: number) => {
        const sections = snapshot.getLoadable(sectionsState).getValue();
        return sections.get(id);
      },
    [],
  );

  const getSectionTotalPages = (sectionId: number) => {
    return getSectionStateById(sectionId);
  };

  const getPreviousSectionTotalPages = (backwardIndex = 0) => {
    return getSectionStateById(id - 1 - backwardIndex);
  };

  return {
    pageNumber,
    pageDimension: dimension,
    pageMargin: margin,
    totalPages: totalPages,
    getSectionTotalPages,
    getPreviousSectionTotalPages,
  };
}

export default usePageInfo;
