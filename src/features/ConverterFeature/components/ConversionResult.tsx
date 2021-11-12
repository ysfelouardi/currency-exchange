import { memo } from "react";
import { ResultContainer } from "./styles";
import { useSelector } from "react-redux";
import {
  selectConversionResult,
  selectError,
  selectLoading,
} from "../slice/selectors";
import Spinner from "../../../components/Spinner";

function ConversionResult() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const {
    baseCurrencyRate,
    targetCurrencyRate,
    conversionFormValues: { from, to, amount },
    conversionResult,
  } = useSelector(selectConversionResult);

  if (loading) {
    return (
      <ResultContainer>
        <Spinner />
      </ResultContainer>
    );
  }

  if (error) {
    return <ResultContainer hasError>{error}</ResultContainer>;
  }

  return (
    <ResultContainer>
      {conversionResult && (
        <>
          <h1>
            {amount} {from} ={" "}
            <strong>
              {conversionResult} {to}
            </strong>
          </h1>
          <p>
            <span>
              1 {from} = {baseCurrencyRate} {to}
            </span>
            <span>
              1 {to} = {targetCurrencyRate} {from}
            </span>
          </p>
        </>
      )}
    </ResultContainer>
  );
}

// @ts-ignore
export default memo(ConversionResult);
