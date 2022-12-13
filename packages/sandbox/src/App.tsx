import { QueryClient, QueryClientProvider } from "react-query";
import {BrowserRouter,ReportView,ReportRoot,Route, Section, PageContent, pageSize} from '@jikji/react';

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
          <Route path="annual-report" component={TextReport} />          
        </BrowserRouter>
      </ReportRoot>
    </ReportView>
  </QueryClientProvider>
  )
}

function TextReport() {
  return (<>
  <Section dimension={pageSize.A4}>
    <PageContent>
      dd
    </PageContent>
  </Section>
  </>)
}

export default App
