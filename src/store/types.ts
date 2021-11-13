import { ConverterStateType } from "../features/ConverterFeature/slice/types";
import { ExchangeHistoryState } from "../features/ExchangeHistory/slice/types";
import { ConverterHistoryStateType } from "../features/ConversionHisotry/slice/types";

export interface RootState {
  converter?: ConverterStateType;
  historyRates?: ExchangeHistoryState;
  historyOperations?: ConverterHistoryStateType;
}
