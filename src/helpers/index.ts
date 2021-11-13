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
  formData: ConversionFormValues & { timestamp: Date }
) {
  const savedData = getConversionFormData();
  localStorage.setItem(
    "ConversionHistoryOperations",
    JSON.stringify([...savedData, formData])
  );
}

/* istanbul ignore next line */
export function getConversionFormData(): Array<
  ConversionFormValues & { timestamp: Date }
> {
  const data = localStorage.getItem("ConversionHistoryOperations");
  return !data ? [] : JSON.parse(data);
}
