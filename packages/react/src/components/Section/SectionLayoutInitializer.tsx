import {ReactNode, useMemo, useRef} from 'react';
import Page from 'components/Page';
import useIsLayoutSuspended from 'components/useIsLayoutSuspended';
import log, {LogFlag} from 'core/log';
import parseSectionChildren from './parseSectionChildren';
import getHeaderFooterBuilder from './getHeaderFooterBuilder';
import SectionLayoutBuilder, {DivRefObject} from './SectionLayoutBuilder';
import PrerenderPreview from './PrerenderPreview';
import { useSetSectionInfo } from './useSetSectionInfo';

interface SectionLayoutInitializerProps {
  children: ReactNode;
}

function SectionLayoutInitializer({children}: SectionLayoutInitializerProps) {
  window.scrollTo({left: 0, top: 0});
  const isLayoutSuspended = useIsLayoutSuspended();
  useSetSectionInfo(0, false);
  const pageRef = useRef<HTMLDivElement>(null);
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const sectionFooterRef = useRef<HTMLDivElement>(null);

  const sectionChildren = useMemo(
    () => parseSectionChildren(children),
    [children],
  );

  const {buildFooter, buildHeader} = getHeaderFooterBuilder(
    1,
    sectionChildren,
    sectionHeaderRef,
    sectionFooterRef,
  );

  // prettier-ignore
  log.debug("layout initializer", {isLayoutSuspended}, [LogFlag.SectionLayout]);

  if (isLayoutSuspended || pageRef.current == null) {
    // render initialize page, we need it for calculations
    return (
      <PrerenderPreview>
        <Page
          pageNumber={0}
          totalPages={0}
          ref={pageRef}
          {...sectionChildren.pageElements}
          footer={buildFooter(0)}
          header={buildHeader(0)}
        />
      </PrerenderPreview>
    );
  }

  return (
    <SectionLayoutBuilder
      sectionChildren={sectionChildren}
      pageRef={pageRef as DivRefObject}
      sectionHeaderRef={sectionHeaderRef as DivRefObject}
      sectionFooterRef={sectionFooterRef as DivRefObject}
    />
  );
}

export default SectionLayoutInitializer;
