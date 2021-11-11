import { memo } from "react";
import { PageTitle } from "../../components/common";
import ConversionForm from "./components/ConversionForm";

function ConverterFeature() {
  return (
    <>
      <PageTitle>I want to convert</PageTitle>
      <ConversionForm />
    </>
  );
}

export default memo(ConverterFeature);
