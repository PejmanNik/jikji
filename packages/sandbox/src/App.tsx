import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, ReportView, ReportRoot, Route, Section, PageContent, pageSize, SectionHeader } from '@jikji/react';
import LoremContent from "./components/LoremContent";
import SimpleTable from "./components/SimpleTable";
import SequenceContent from "./components/SequenceContent";
import Stateful from "./components/Stateful";
import Unbreakable from "./components/Unbreakable";
import FetchTextFromAPI from "./components/FetchTextFromAPI";
import TwoColumnText from "./components/TwoColumnText";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReportView>
        <ReportRoot>
          <BrowserRouter>
            <Route path="report-1" component={TextReport} />
          </BrowserRouter>
        </ReportRoot>
      </ReportView>
    </QueryClientProvider>
  )
}

function TextReport() {
  return (<>
    <Section dimension={pageSize.A5}>
      <SectionHeader>
        Section 1
      </SectionHeader>
      <PageContent>
        <LoremContent paragraphs={5} />
        <Unbreakable />      
        <Stateful />
        <FetchTextFromAPI />
        <SequenceContent />       
      </PageContent>
    </Section>
    <Section dimension={pageSize.A5}>
      <SectionHeader>
        Section 2
      </SectionHeader>
      <PageContent>
        <LoremContent paragraphs={6} />
        <SimpleTable />
        <TwoColumnText />
      </PageContent>
    </Section>
  </>)
}

export default App
