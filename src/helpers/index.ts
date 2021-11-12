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
    base: baseRate,
    target: targetRate,
    result,
  };
}
