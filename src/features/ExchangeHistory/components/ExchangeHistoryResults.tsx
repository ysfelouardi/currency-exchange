import { memo } from "react";
import { ExchangeHistoryResultsWrapper } from "./styles";
import Table from "../../../components/Table";
import { useSelector } from "react-redux";
import {
  selectError,
  selectHistoryRates,
  selectLoading,
  selectStatistics,
} from "../slice/selectors";
import Spinner from "../../../components/Spinner";

// const rows = [...Array(7)].map(() => ({
//   date: new Date().toISOString(),
//   rate: Math.random(),
// }));

function ExchangeHistoryResults() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const historyData = useSelector(selectHistoryRates);

  const statistics = useSelector(selectStatistics);

  if (loading) {
    return (
      <ExchangeHistoryResultsWrapper isLoading={loading}>
        <Spinner />
      </ExchangeHistoryResultsWrapper>
    );
  }

  if (error) {
    return (
      <ExchangeHistoryResultsWrapper hasError={!!error}>
        <p className="error-message">{error}</p>
      </ExchangeHistoryResultsWrapper>
    );
  }

  return (
    <ExchangeHistoryResultsWrapper>
      <div className="col">
        <Table headers={["Date", "Exchange Rate"]} rows={historyData} />
      </div>
      <div className={"col"}>
        <Table headers={["Statistics"]} rows={statistics} />
      </div>
    </ExchangeHistoryResultsWrapper>
  );
}

export default memo(ExchangeHistoryResults);
