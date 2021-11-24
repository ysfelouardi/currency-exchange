import { convertAmount } from "../saga";
import type { ConversionFormValues, ExchangeRate } from "../types";
import * as slice from "..";
import * as api from "../api";
import * as selectors from "../selectors";

import * as historySlice from "../../../ExchangeHistory/slice";

import { saveConversionFormData } from "../../../../helpers";

import { testSaga } from "redux-saga-test-plan";

describe("ConverterFeature saga", () => {
  it("should load exchange rates but throw an error when one or the two of the currencies are invalid", () => {
    const rates: ExchangeRate[] = [
      {
        currency: "MAD",
        rate: "1.45",
        timestamp: new Date().toISOString(),
      },
    ];

    testSaga(convertAmount, {
      type: "",
      payload: { from: "none sense", to: "ETH", amount: 45 },
    })
      .next()
      .select(selectors.selectExchangeRates)
      .next([])
      .call(api.getExchangeRatesApi)
      .next(rates)
      .put(slice.converterActions.gotExchangeRates(rates))
      .next()
      .put(slice.converterActions.convertAmountFailed("*currencies invalid!"))
      .next()
      .isDone();
  });

  it("should calculate the results and dispatch them to the store and persist form values in local storage", () => {
    const rates: ExchangeRate[] = [
      {
        currency: "BTC",
        rate: "60343.445",
        timestamp: new Date().toISOString(),
      },
      {
        currency: "ETH",
        rate: "40034.285",
        timestamp: new Date().toISOString(),
      },
    ];

    const formValues: ConversionFormValues = {
      from: "BTC",
      to: "ETH",
      amount: 45,
    };

    testSaga(convertAmount, {
      type: "",
      payload: formValues,
    })
      .next()
      .select(selectors.selectExchangeRates)
      .next(rates)
      .put(
        slice.converterActions.amountConverted({
          base: 1.507294,
          target: 0.66344,
          result: 67.8282,
        })
      )
      .next()
      .put(historySlice.historyRatesActions.getHistoryRates())
      .next()
      .call(saveConversionFormData, {
        ...formValues,
        timestamp: new Date().toISOString(),
      })
      .next()
      .isDone();
  });

  it("should fail when calling the nomics api", () => {
    console.log = jest.fn();
    testSaga(convertAmount, {
      type: "",
      payload: { from: "none sense", to: "ETH", amount: 45 },
    })
      .next()
      .select(selectors.selectExchangeRates)
      .next([])
      .call(api.getExchangeRatesApi)
      .throw(new Error("error"))
      .put(
        slice.converterActions.convertAmountFailed(
          "something went wrong try again!"
        )
      )
      .next()
      .isDone();
  });
});
