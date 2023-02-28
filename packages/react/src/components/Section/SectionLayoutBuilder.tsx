import { memo, ReactNode, useRef } from 'react';
import Page from 'components/Page';
import log, { LogFlag } from 'core/log';
import PageOverflowWarning from 'components/PageOverflowWarning';
import debugHelper from 'core/debugHelper';
import { SectionChildren } from './parseSectionChildren';
import getHeaderFooterBuilder from './getHeaderFooterBuilder';
import { useSetSectionInfo } from './useSetSectionInfo';

export interface DivRefObject {
  readonly current: HTMLDivElement;
}

interface SectionLayoutBuilderProps {
  sectionChildren: SectionChildren;
  pages: ReactNode[]
}

function SectionLayoutBuilder({
  sectionChildren,
  pages
}: SectionLayoutBuilderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { pageElements } = sectionChildren;

  const { buildFooter, buildHeader } = getHeaderFooterBuilder(
    pages.length,
    sectionChildren,
  );

  useSetSectionInfo(pages.length, true);

  // prettier-ignore
  log.debug("layout builder", { pages, props: { sectionChildren } }, [LogFlag.SectionLayout]);

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
