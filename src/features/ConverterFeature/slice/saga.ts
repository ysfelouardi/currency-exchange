import { call, put, takeLatest, select } from "redux-saga/effects";
import { converterActions } from ".";
import { getExchangeRatesApi } from "./api";
import { ConversionFormValues, ExchangeRate } from "./types";
import { selectExchangeRates } from "./selectors";
import { PayloadAction } from "@reduxjs/toolkit";

function* convertAmount(action: PayloadAction<ConversionFormValues>) {
  try {
    const rates: Array<ExchangeRate> = yield select(selectExchangeRates);
    if (rates === null || rates.length === 0) {
      const data: Array<ExchangeRate> = yield call(getExchangeRatesApi);
      yield put(converterActions.gotExchangeRates(data));
    }
  } catch (e) {
    console.error("error getting exchange amounts ....", e);
  }
}

export function* ConverterSaga() {
  yield takeLatest(converterActions.convertAmount.type, convertAmount);
}
