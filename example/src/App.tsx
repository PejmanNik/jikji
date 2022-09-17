import { QueryClient, QueryClientProvider } from "react-query";
import { ReportView, ReportRoot, BrowserRouter, Route } from "@jikji/react";
import AnnualReport from "./AnnualReport";

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
            <Route path="annual-report" component={AnnualReport} />           
            <Route path="" component={Menu} isDefault />
          </BrowserRouter>
        </ReportRoot>
      </ReportView>
    </QueryClientProvider>
  );
}

function Menu() {
  return (
    <ul>
      <li>
        <a href="annual-report">annual-report</a>
      </li>
    </ul>
  );
}
export default App;
