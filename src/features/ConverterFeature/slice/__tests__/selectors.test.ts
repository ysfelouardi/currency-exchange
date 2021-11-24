import * as selectors from "../selectors";
import type { RootState } from "../../../../store/types";
import { initialState } from "../index";
import type { ConversionFormValues, ExchangeRate } from "../types";

describe("ConverterFeature selectors", () => {
  let state: RootState = {};

  beforeEach(() => {
    state = {};
  });

  it("should select the initial conversionFormValues state", () => {
    expect(selectors.selectConversionFromValues(state)).toEqual(
      initialState.conversionFormValues
    );
  });

  it("should select the base currency", () => {
    const base = "USD";
    state = {
      converter: {
        ...initialState,
        conversionFormValues: {
          ...initialState.conversionFormValues,
          from: base,
        },
      },
    };

    expect(selectors.selectBaseCurrency(state)).toEqual(base);
  });

  it("should select the target currency", () => {
    const target = "BTC";
    state = {
      converter: {
        ...initialState,
        conversionFormValues: {
          ...initialState.conversionFormValues,
          to: target,
        },
      },
    };

    expect(selectors.selectTargetCurrency(state)).toEqual(target);
  });

  it("should select conversion form values", () => {
    const fromValues: ConversionFormValues = {
      from: "BTC",
      to: "ETH",
      amount: 45,
    };
    state = {
      converter: {
        ...initialState,
        conversionFormValues: fromValues,
      },
    };

    expect(selectors.selectConversionFromValues(state)).toEqual(fromValues);
  });

  it("should select exchange rates", () => {
    const rate: ExchangeRate = {
        currency: "MAD",
        rate: "1.45",
        timestamp: new Date().toISOString(),
      },
      state = {
        converter: {
          ...initialState,
          exchangeRates: [rate],
        },
      };

    expect(selectors.selectExchangeRates(state)).toEqual([rate]);
  });

  it("should select error", () => {
    const error = "something wen wrong!";
    state = {
      converter: { ...initialState, error: error },
    };
    expect(selectors.selectError(state)).toEqual(error);
  });

  it("should select loading", () => {
    const loading = true;
    state = {
      converter: { ...initialState, loading: loading },
    };
    expect(selectors.selectLoading(state)).toEqual(loading);
  });
});
