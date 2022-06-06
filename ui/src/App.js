import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout";
import Routes from "./Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes/>
      </Layout>
    </QueryClientProvider>
  )
}

export default App;
