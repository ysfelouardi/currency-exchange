import { memo } from "react";
import { ResultContainer } from "./styles";

function ConversionResult() {
  return (
    <ResultContainer>
      <h1>
        500 USD = <strong>100.00 EUR</strong>
      </h1>
      <p>
        <span>1 EUR = 1.445454 USD</span>
        <span>1 USD = 0.445454 EUR</span>
      </p>
    </ResultContainer>
  );
}

export default memo(ConversionResult);
