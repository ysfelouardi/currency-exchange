import Theme from "./theme";
import Layout from "./components/Layout";
import ConverterFeature from "./features/ConverterFeature";
import ExchangeHistory from "./features/ExchangeHistory";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { memo } from "react";
import ConversionHistory from "./features/ConversionHisotry";

const ConverterPage = memo(() => (
  <>
    <ConverterFeature />
    <hr />
    <ExchangeHistory />
  </>
));

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={"/"} element={<ConverterPage />} />
            <Route path={"/history"} element={<ConversionHistory />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
