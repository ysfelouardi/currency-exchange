export type ExchangeRate = {
  currency: string;
  rate: string;
  timestamp: string;
};

export type ConversionFormValues = {
  amount: number | null;
  from: string | null;
  to: string | null;
};

export type ConverterStateType = {
  loading: boolean;
  error: string | null;
  conversionFormValues: ConversionFormValues;
  exchangeRates: Array<ExchangeRate>;
  conversionResult: number | null;
  baseCurrencyRate: number | null;
  targetCurrencyRate: number | null;
};
