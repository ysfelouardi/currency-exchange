import { memo } from "react";
import Select from "../../../components/Select";
import { ExchangeHistoryFiltersWrapper, RadioGroupContainer } from "./styles";
import RadioButton from "../../../components/RadioButton";

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
      <RadioGroupContainer>
        <RadioButton name={"history-display"} value={"table"} label="table" />
        <RadioButton name={"history-display"} value={"chart"} label="chart" />
      </RadioGroupContainer>
    </ExchangeHistoryFiltersWrapper>
  );
}

export default memo(ExchangeHistoryFilters);
