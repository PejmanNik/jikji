import {
  pageSize,
  Section,
  PageContent,
  PageHeader,
  PageFooter,
  PageOverlay,
  PageOverlayItem,
  useFontLoadSuspension,
} from "@jikji/react";
import Header1 from "./Header";
import Cover from "./Cover";
import "../styles.css";
import Finance from "./Finance";
import Business from "./Business";
import PageBar from "./PageBar";
import Footer from "./Footer";

function AnnualReport() {
  useFontLoadSuspension();
  return (
    <>
      <Section dimension={pageSize.A4}>
        <PageContent>
          <Cover />
        </PageContent>
      </Section>

      <Section dimension={pageSize.A4}>
        <PageHeader>
          <Header1 />
        </PageHeader>

        <PageContent>
          <Finance />
          <Business />
        </PageContent>

        <PageFooter>
          <Footer />
        </PageFooter>

        <PageOverlay>
          <PageOverlayItem zIndex={1}>
            <PageBar />
          </PageOverlayItem>
        </PageOverlay>
      </Section>
    </>
  );
}

export default AnnualReport;
