import { createSelector } from "@reduxjs/toolkit";

import { initialState } from ".";
import { RootState } from "../../../store/types";

const selectSlice = (state: RootState) =>
  state.historyOperations || initialState;

export const selectLoading = createSelector(
  [selectSlice],
  ({ loading }) => loading
);
export const selectError = createSelector([selectSlice], ({ error }) => error);
export const selectOperations = createSelector(
  [selectSlice],
  ({ operations }) => operations
);
