import { ConversionFormValues } from "../features/ConverterFeature/slice/types";

export function calculateExchangeResult({
  base,
  target,
  amount,
}: {
  base: number;
  target: number;
  amount: number;
}) {
  const baseRate = base / target;
  const targetRate = target / base;
  const result = Number((amount * baseRate).toFixed(4));

  return {
    base: Number(baseRate.toFixed(6)),
    target: Number(targetRate.toFixed(6)),
    result,
  };
}

export function getPreviousNDate({
  date,
  numberOfDays,
}: {
  date: Date;
  numberOfDays: number;
}) {
  const previousDate = new Date(date);
  previousDate.setDate(date.getDate() - numberOfDays);
  return previousDate;
}

export function saveConversionFormData(
  formData: ConversionFormValues & { timestamp: string }
) {
  const savedData = getConversionFormData();
  localStorage.setItem(
    "ConversionHistoryOperations",
    JSON.stringify([formData, ...savedData])
  );
}

export function saveOperationsToStorage(
  data: Array<ConversionFormValues & { timestamp: string }>
) {
  localStorage.setItem("ConversionHistoryOperations", JSON.stringify(data));
}

/* istanbul ignore next line */
export function getConversionFormData(): Array<
  ConversionFormValues & { timestamp: string }
> {
  const data = localStorage.getItem("ConversionHistoryOperations");
  return !data ? [] : JSON.parse(data);
}

export function getProperDateString(isoDate: string): string {
  const date = new Date(isoDate);
  const dateString = date.toLocaleDateString("en-GB");
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${dateString} @ ${hours}:${minutes}`;
}

export const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
