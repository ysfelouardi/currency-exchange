import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { HistoryRatesSaga } from "./saga";
import { ExchangeHistory, ExchangeHistoryState, StatsType } from "./types";

export const initialState: ExchangeHistoryState = {
  loading: false,
  error: null,
  historyData: [],
  duration: 7,
  statistics: [],
  displayedView: "table",
};

const slice = createSlice({
  name: "historyRates",
  initialState,
  reducers: {
    getHistoryRates(state) {
      state.loading = true;
      state.error = null;
    },
    gotHistoryRates(state, action: PayloadAction<Array<ExchangeHistory>>) {
      state.loading = false;
      state.historyData = action.payload;
    },
    gotStatistics(state, action: PayloadAction<Array<StatsType>>) {
      state.statistics = action.payload;
    },
    getHistoryRatesFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    changeDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setDisplayedView(state, action: PayloadAction<"table" | "chart">) {
      state.displayedView = action.payload;
    },
    resetExchangeData(state) {
      state.historyData = [];
      state.statistics = [];
    },
  },
});

export const { actions: historyRatesActions, reducer } = slice;

export const useHistoryRatesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: HistoryRatesSaga });

  return { actions: slice.actions };
};
