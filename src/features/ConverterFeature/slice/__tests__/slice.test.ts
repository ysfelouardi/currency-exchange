import type { ConverterStateType, ExchangeRate } from "../types";
import * as slice from "..";

describe("ConverterFeature slice", () => {
  let state: ConverterStateType;

  beforeEach(() => {
    state = slice.initialState;
  });

  it("should return the initial state", () => {
    expect(slice.reducer(undefined, { type: "" })).toEqual(state);
  });

  it("should initiate handling converting an amount", () => {
    const formValues = {
      from: "BTC",
      to: "ETH",
      amount: 45,
    };
    expect(
      slice.reducer(state, slice.converterActions.convertAmount(formValues))
    ).toEqual({
      ...slice.initialState,
      loading: true,
      error: null,
      conversionFormValues: formValues,
    });
  });

  it("should handle converting an amount", () => {
    const data = {
      base: 1.44333434,
      target: 1.445544,
      result: 50.4533,
    };
    expect(
      slice.reducer(state, slice.converterActions.amountConverted(data))
    ).toEqual({
      ...slice.initialState,
      loading: false,
      baseCurrencyRate: data.base,
      targetCurrencyRate: data.target,
      conversionResult: data.result,
    });
  });

  it("should fail when converting an amount", () => {
    const error = "invalid currencies";
    expect(
      slice.reducer(state, slice.converterActions.convertAmountFailed(error))
    ).toEqual({
      ...slice.initialState,
      loading: false,
      error: error,
    });
  });

  it("should reset the conversion state", () => {
    expect(
      slice.reducer(state, slice.converterActions.resetConversionState())
    ).toEqual({
      ...slice.initialState,
    });
  });

  it("should handle getting the exchange rates", () => {
    const rates: ExchangeRate[] = [
      {
        currency: "MAD",
        rate: "1.45",
        timestamp: new Date().toISOString(),
      },
    ];
    expect(
      slice.reducer(state, slice.converterActions.gotExchangeRates(rates))
    ).toEqual({
      ...slice.initialState,
      exchangeRates: rates,
    });
  });
});
