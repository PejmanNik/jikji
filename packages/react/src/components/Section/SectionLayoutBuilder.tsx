import {memo, useContext, useRef} from 'react';
import Page from 'components/Page';
import splitPageContent from 'core/splitPageContent';
import {OptionContext} from 'components/ReportRoot/optionContext';
import log, {LogFlag} from 'core/log';
import PageOverflowWarning from 'components/PageOverflowWarning';
import debugHelper from 'core/debugHelper';
import {SectionChildren} from './parseSectionChildren';
import getHeaderFooterBuilder, {
  buildPageAdjustments,
} from './getHeaderFooterBuilder';
import { useSetSectionInfo } from './useSetSectionInfo';

export interface DivRefObject {
  readonly current: HTMLDivElement;
}

interface SectionLayoutBuilderProps {
  sectionChildren: SectionChildren;
  pageRef: DivRefObject;
  sectionHeaderRef: DivRefObject;
  sectionFooterRef: DivRefObject;
}

function SectionLayoutBuilder({
  sectionChildren,
  pageRef,
  sectionHeaderRef,
  sectionFooterRef,
}: SectionLayoutBuilderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {plugins} = useContext(OptionContext);
  const {pageElements} = sectionChildren;

  const pageAdjustments = buildPageAdjustments(
    sectionHeaderRef,
    sectionFooterRef,
  );

  const pages = splitPageContent(
    pageRef.current,
    pageRef.current.getBoundingClientRect(),
    pageAdjustments,
    plugins,
  );

  const {buildFooter, buildHeader} = getHeaderFooterBuilder(
    pages.length,
    sectionChildren,
  );

  useSetSectionInfo(pages.length, true);

  // prettier-ignore
  log.debug("layout builder", {pages, props:{sectionChildren, pageRef, sectionHeaderRef, sectionFooterRef}}, [LogFlag.SectionLayout]);

  return (
    <div ref={ref}>
      {debugHelper.activateDebuggers && (
        <PageOverflowWarning sectionRef={ref} />
      )}
      {pages.map((pageContent, i) => (
        <Page
          key={i}
          pageNumber={i + 1}
          totalPages={pages.length}
          {...pageElements}
          content={pageContent}
          header={buildHeader(i)}
          footer={buildFooter(i)}
        />
      ))}
    </div>
  );
}

export default memo(SectionLayoutBuilder);
