import Theme from "./theme";
import Layout from "./components/Layout";
import ConverterFeature from "./features/ConverterFeature";

function App() {
  return (
    <Theme>
      <Layout>
        <ConverterFeature />
      </Layout>
    </Theme>
  );
}

export default App;
