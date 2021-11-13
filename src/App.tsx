import Theme from "./theme";
import Layout from "./components/Layout";
import ConverterFeature from "./features/ConverterFeature";
import ExchangeHistory from "./features/ExchangeHistory";

function App() {
  return (
    <Theme>
      <Layout>
        <ConverterFeature />
        <hr />
        <ExchangeHistory />
      </Layout>
    </Theme>
  );
}

export default App;
