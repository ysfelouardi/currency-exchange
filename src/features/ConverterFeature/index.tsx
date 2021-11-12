import { memo } from "react";
import { PageTitle } from "../../components/common";
import ConversionForm from "./components/ConversionForm";
import ConversionResult from "./components/ConversionResult";

function ConverterFeature() {
  return (
    <>
      <PageTitle>I want to convert</PageTitle>
      <ConversionForm />
      <ConversionResult />
      <hr />
    </>
  );
}

export default memo(ConverterFeature);
