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
