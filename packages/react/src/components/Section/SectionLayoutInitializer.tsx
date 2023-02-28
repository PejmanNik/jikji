import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';
import Page from 'components/Page';
import useIsLayoutSuspended from 'components/useIsLayoutSuspended';
import log, { LogFlag } from 'core/log';
import splitPageContent from 'core/splitPageContent';
import { OptionContext } from 'components/ReportRoot/optionContext';
import parseSectionChildren from './parseSectionChildren';
import getHeaderFooterBuilder, { buildPageAdjustments } from './getHeaderFooterBuilder';
import SectionLayoutBuilder from './SectionLayoutBuilder';
import PrerenderPreview from './PrerenderPreview';
import { useSetSectionInfo } from './useSetSectionInfo';

interface SectionLayoutInitializerProps {
  children: ReactNode;
}

function SectionLayoutInitializer({ children }: SectionLayoutInitializerProps) {
  window.scrollTo({ left: 0, top: 0 });
  const isLayoutSuspended = useIsLayoutSuspended();
  useSetSectionInfo(0, false);

  const pageRef = useRef<HTMLDivElement>(null);
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const sectionFooterRef = useRef<HTMLDivElement>(null);
  const { plugins } = useContext(OptionContext);
  const [pages, setPages] = useState<ReactNode[] | undefined>();

  const sectionChildren = useMemo(
    () => parseSectionChildren(children),
    [children],
  );

  const { buildFooter, buildHeader } = getHeaderFooterBuilder(
    1,
    sectionChildren,
    sectionHeaderRef,
    sectionFooterRef,
  );

  // prettier-ignore
  log.debug("layout initializer", { isLayoutSuspended }, [LogFlag.SectionLayout]);


  useEffect(() => {
    if (!isLayoutSuspended && pageRef.current != null) {
      const pageAdjustments = buildPageAdjustments(
        sectionHeaderRef,
        sectionFooterRef,
      );

      const pages = splitPageContent(
        pageRef.current.getBoundingClientRect(),
        pageAdjustments,
        plugins,
      );

      setPages(pages);
    }
  }, [isLayoutSuspended, plugins]);


  if (!pages) {
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
      pages={pages}
    />
  );
}

export default SectionLayoutInitializer;
