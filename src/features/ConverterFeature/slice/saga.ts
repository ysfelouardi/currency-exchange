import { call, put, takeLatest, select } from "redux-saga/effects";
import { converterActions } from ".";
import { getExchangeRatesApi } from "./api";
import { ConversionFormValues, ExchangeRate } from "./types";
import { selectExchangeRates } from "./selectors";
import { PayloadAction } from "@reduxjs/toolkit";
import { calculateExchangeResult } from "../../../helpers";

function* convertAmount(action: PayloadAction<ConversionFormValues>) {
  try {
    let rates: Array<ExchangeRate> = yield select(selectExchangeRates);
    if (rates === null || rates.length === 0) {
      const data: Array<ExchangeRate> = yield call(getExchangeRatesApi);
      yield put(converterActions.gotExchangeRates(data));
      rates = data;
    }

    const { from, to, amount } = action.payload;

    const currenciesData = rates
      .filter(({ currency }) => currency === from || currency === to)
      .sort((a, b) => Number(a.rate) - Number(b.rate));

    //console.log({ currenciesData, rates });

    if (currenciesData.length === 2) {
      const [base, target] = [
        Number(
          currenciesData[0].currency === from
            ? currenciesData[0].rate
            : currenciesData[1].rate
        ),
        Number(
          currenciesData[0].currency === to
            ? currenciesData[0].rate
            : currenciesData[1].rate
        ),
      ];

      yield put(
        converterActions.amountConverted(
          calculateExchangeResult({ base, target, amount: Number(amount) })
        )
      );
    } else {
      yield put(converterActions.convertAmountFailed("*currencies invalid!"));
    }
  } catch (e) {
    console.error("error getting exchange amounts ....", e);
    yield put(
      converterActions.convertAmountFailed("something went wrong try again!")
    );
  }
}

export function* ConverterSaga() {
  yield takeLatest(converterActions.convertAmount.type, convertAmount);
}
