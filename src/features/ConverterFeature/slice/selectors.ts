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

export const selectBaseCurrency = createSelector(
  [selectSlice],
  ({ conversionFormValues: { from } }) => from
);

export const selectTargetCurrency = createSelector(
  [selectSlice],
  ({ conversionFormValues: { to } }) => to
);

export const selectConversionFromValues = createSelector(
  [selectSlice],
  ({ conversionFormValues }) => conversionFormValues
);

export const selectConversionResult = createSelector(
  [selectSlice],
  ({
    baseCurrencyRate,
    targetCurrencyRate,
    conversionResult,
    conversionFormValues,
  }) => ({
    baseCurrencyRate,
    targetCurrencyRate,
    conversionResult,
    conversionFormValues,
  })
);
