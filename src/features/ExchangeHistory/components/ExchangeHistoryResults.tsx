import { memo } from "react";
import { ExchangeHistoryResultsWrapper } from "./styles";
import Table from "../../../components/Table";
import { useSelector } from "react-redux";
import {
  selectDisplayedView,
  selectError,
  selectHistoryRates,
  selectLoading,
  selectRatesData,
  selectStatistics,
} from "../slice/selectors";
import Spinner from "../../../components/Spinner";
import { Sparklines, SparklinesBars, SparklinesLine } from "react-sparklines";
import { useTheme } from "styled-components";
import { ThemeInterface } from "../../../theme/types";

function ExchangeHistoryResults() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const historyData = useSelector(selectHistoryRates);

  const displayView = useSelector(selectDisplayedView);

  const ratesData = useSelector(selectRatesData);

  const statistics = useSelector(selectStatistics);

  const theme = useTheme() as ThemeInterface;

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
        {displayView === "table" ? (
          <Table headers={["Date", "Exchange Rate"]} rows={historyData} />
        ) : (
          <Sparklines data={ratesData}>
            <SparklinesBars
              style={{
                stroke: "white",
                fill: theme.colors.primary,
                fillOpacity: 0.25,
              }}
            />
            <SparklinesLine
              style={{ stroke: theme.colors.primary, fill: "none" }}
            />
          </Sparklines>
        )}
      </div>
      <div className={"col"}>
        <Table headers={["Statistics"]} rows={statistics} />
      </div>
    </ExchangeHistoryResultsWrapper>
  );
}

export default memo(ExchangeHistoryResults);
