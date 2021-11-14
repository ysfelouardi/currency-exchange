import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { ConverterSaga } from "./saga";
import {
  ConversionFormValues,
  ConverterStateType,
  ExchangeRate,
} from "./types";

export const initialState: ConverterStateType = {
  loading: false,
  error: null,
  conversionFormValues: {
    amount: null,
    from: null,
    to: null,
  },
  exchangeRates: [],
  conversionResult: null,
  baseCurrencyRate: null,
  targetCurrencyRate: null,
};

const slice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    convertAmount(state, action: PayloadAction<ConversionFormValues>) {
      state.loading = true;
      state.conversionFormValues = action.payload;
      state.error = null;
    },
    amountConverted(
      state,
      action: PayloadAction<{ base: number; target: number; result: number }>
    ) {
      state.loading = false;
      state.baseCurrencyRate = action.payload.base;
      state.targetCurrencyRate = action.payload.target;
      state.conversionResult = action.payload.result;
    },
    convertAmountFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    gotExchangeRates(state, action: PayloadAction<Array<ExchangeRate>>) {
      state.exchangeRates = action.payload;
    },
    resetConversionState(state) {
      state.loading = false;
      state.error = null;
      state.conversionFormValues = { ...initialState.conversionFormValues };
      state.conversionResult = null;
      state.baseCurrencyRate = null;
      state.targetCurrencyRate = null;
    },
  },
});

export const { actions: converterActions, reducer } = slice;

export const useConverterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ConverterSaga });

  return { actions: slice.actions };
};
