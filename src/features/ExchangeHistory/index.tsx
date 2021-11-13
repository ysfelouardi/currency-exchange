import { memo } from "react";
import { SectionTitle } from "../../components/common";
import { ExchangeHistoryContainer } from "./components/styles";
import ExchangeHistoryFilters from "./components/ExchangeHistoryFilters";
import ExchangeHistoryResults from "./components/ExchangeHistoryResults";

function ExchangeHistory() {
  return (
    <ExchangeHistoryContainer>
      <SectionTitle>Exchange history</SectionTitle>
      <ExchangeHistoryFilters />
      <ExchangeHistoryResults />
    </ExchangeHistoryContainer>
  );
}

export default memo(ExchangeHistory);
