import { createSelector } from "@reduxjs/toolkit";

import { initialState } from ".";
import { RootState } from "../../../store/types";

const selectSlice = (state: RootState) => state.historyRates || initialState;

export const selectLoading = createSelector(
  [selectSlice],
  ({ loading }) => loading
);
export const selectError = createSelector([selectSlice], ({ error }) => error);

export const selectHistoryRates = createSelector(
  [selectSlice],
  ({ historyData }) => historyData
);

export const selectDuration = createSelector(
  [selectSlice],
  ({ duration }) => duration
);

export const selectStatistics = createSelector(
  [selectSlice],
  ({ statistics }) => statistics
);
