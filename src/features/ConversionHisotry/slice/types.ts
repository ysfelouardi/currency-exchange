import { ConversionFormValues } from "../../ConverterFeature/slice/types";

export type operation = {
  date: string;
  event: string;
  id?: string;
  data?: ConversionFormValues;
};

export type ConverterHistoryStateType = {
  loading: boolean;
  error: null | string;
  operations: Array<operation>;
};
