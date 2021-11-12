import { createSelector } from "@reduxjs/toolkit";

import { initialState } from ".";
import { RootState } from "../../../store/types";

const selectSlice = (state: RootState) => state.converter || initialState;

export const selectLoading = createSelector(
  [selectSlice],
  ({ loading }) => loading
);
export const selectError = createSelector([selectSlice], ({ error }) => error);
export const selectExchangeRates = createSelector(
  [selectSlice],
  ({ exchangeRates }) => exchangeRates
);
