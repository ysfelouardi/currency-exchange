import { memo } from "react";
import { SectionTitle } from "../../components/common";
import { ExchangeHistoryContainer } from "./components/styles";
import ExchangeHistoryFilters from "./components/ExchangeHistoryFilters";
import ExchangeHistoryResults from "./components/ExchangeHistoryResults";
import { useHistoryRatesSlice } from "./slice";

function ExchangeHistory() {
  useHistoryRatesSlice();

  return (
    <ExchangeHistoryContainer>
      <SectionTitle>Exchange history</SectionTitle>
      <ExchangeHistoryFilters />
      <ExchangeHistoryResults />
    </ExchangeHistoryContainer>
  );
}

export default memo(ExchangeHistory);
