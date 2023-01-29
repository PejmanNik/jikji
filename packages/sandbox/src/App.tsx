import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, ReportView, ReportRoot, Route, Section, PageContent, pageSize, SectionHeader } from '@jikji/react';
import LoremContent from "./components/LoremContent";

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
    <Section dimension={pageSize.A4}>
      <SectionHeader>
        Section 1
      </SectionHeader>
      <PageContent>
        <LoremContent paragraphs={6} />
      </PageContent>
    </Section>
    <Section dimension={pageSize.A4}>
      <SectionHeader>
        Section 2
      </SectionHeader>
      <PageContent>
        <LoremContent paragraphs={6} />
      </PageContent>
    </Section>
  </>)
}

export default App
