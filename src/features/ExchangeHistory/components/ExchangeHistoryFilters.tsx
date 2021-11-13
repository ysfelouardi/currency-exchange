import { memo, useCallback } from "react";
import Select from "../../../components/Select";
import { ExchangeHistoryFiltersWrapper, RadioGroupContainer } from "./styles";
import RadioButton from "../../../components/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { historyRatesActions } from "../slice";
import { selectDisplayedView, selectDuration } from "../slice/selectors";
import { selectError } from "../../ConverterFeature/slice/selectors";

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
  const duration = useSelector(selectDuration);
  const dispatch = useDispatch();

  const converterFormError = useSelector(selectError);

  const displayedView = useSelector(selectDisplayedView);

  const handleChangeDuration = useCallback(
    (e) => {
      const value = Number(e.target.value);
      dispatch(historyRatesActions.changeDuration(value));
      dispatch(historyRatesActions.getHistoryRates());
    },
    [dispatch]
  );

  const handleViewChange = useCallback(
    (e) => {
      const { value } = e.target;
      dispatch(historyRatesActions.setDisplayedView(value));
    },
    [dispatch]
  );

  return (
    <ExchangeHistoryFiltersWrapper>
      <Select
        name={"history-duration"}
        label={"Duration"}
        options={options}
        onChange={handleChangeDuration}
        value={duration.toString()}
        disabled={!!converterFormError}
      />
      <RadioGroupContainer>
        <RadioButton
          name={"history-display"}
          value={"table"}
          label="table"
          checked={displayedView === "table"}
          onChange={handleViewChange}
        />
        <RadioButton
          name={"history-display"}
          value={"chart"}
          label="chart"
          checked={displayedView === "chart"}
          onChange={handleViewChange}
        />
      </RadioGroupContainer>
    </ExchangeHistoryFiltersWrapper>
  );
}

export default memo(ExchangeHistoryFilters);
