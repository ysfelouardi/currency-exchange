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
import { Sparklines, SparklinesBars, SparklinesLine } from "react-sparklines";

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
      <div className={"col"}>
        <Sparklines data={[5, 10, 5, 20, 10, 99, 12, 4, 7, 8, 9, 1, 44, 78]}>
          <SparklinesBars
            style={{ stroke: "white", fill: "#41c3f9", fillOpacity: 0.25 }}
          />
          <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
        </Sparklines>
      </div>
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
