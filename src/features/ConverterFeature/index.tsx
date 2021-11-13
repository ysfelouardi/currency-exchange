import { memo } from "react";
import { PageTitle } from "../../components/common";
import ConversionForm from "./components/ConversionForm";
import ConversionResult from "./components/ConversionResult";
import { useConverterSlice } from "./slice";
import { ConverterContainer } from "./components/styles";

function ConverterFeature() {
  useConverterSlice();

  return (
    <ConverterContainer>
      <PageTitle>I want to convert</PageTitle>
      <ConversionForm />
      <ConversionResult />
    </ConverterContainer>
  );
}

export default memo(ConverterFeature);
