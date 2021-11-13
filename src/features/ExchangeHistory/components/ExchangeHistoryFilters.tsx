import { memo } from "react";
import Select from "../../../components/Select";
import { ExchangeHistoryFiltersWrapper } from "./styles";

const options = [
  {
    value: "7",
    text: "7 days",
  },
  {
    value: "14",
    text: "14 days",
  },
  {
    value: "30",
    text: "30 days",
  },
];

function ExchangeHistoryFilters() {
  return (
    <ExchangeHistoryFiltersWrapper>
      <Select name={"history-duration"} label={"Duration"} options={options} />
    </ExchangeHistoryFiltersWrapper>
  );
}

export default memo(ExchangeHistoryFilters);
