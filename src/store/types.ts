import { ConverterStateType } from "../features/ConverterFeature/slice/types";
import { ExchangeHistoryState } from "../features/ExchangeHistory/slice/types";

export interface RootState {
  converter?: ConverterStateType;
  historyRates?: ExchangeHistoryState;
}
