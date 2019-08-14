export function CalcTotalSum(sum, period, rate) {
  if (!Number(sum) || !Number(period)) return false;

  let totalAmount = sum / 100;
  let totalMonths = (period * 30) / 365;
  let amountAtMaturity = Math.round(totalAmount * rate * totalMonths);

  return amountAtMaturity;
}