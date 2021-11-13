import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { ConverterHistoryStateType, operation } from "./types";
import { HistoryOperationsSaga } from "./saga";

export const initialState: ConverterHistoryStateType = {
  loading: false,
  operations: [],
  error: null,
};

const slice = createSlice({
  name: "historyOperations",
  initialState,
  reducers: {
    loadOperations(state) {
      state.loading = true;
      state.error = null;
    },
    gotOperations(state, action: PayloadAction<Array<operation>>) {
      state.loading = false;
      state.operations = action.payload;
    },
    gotOperationsFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteOperation(state, action: PayloadAction<string>) {},
    operationDeleted(state, action: PayloadAction<Array<operation>>) {
      state.operations = action.payload;
    },
  },
});

export const { actions: historyOperationsActions, reducer } = slice;

export const useHistoryOperationsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: HistoryOperationsSaga });

  return { actions: slice.actions };
};
