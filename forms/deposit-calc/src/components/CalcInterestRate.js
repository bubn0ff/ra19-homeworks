export function CalcInterestRate(sum, period) {
  if (!Number(sum) || !Number(period)) return false;

  if (period >= 1 && period <= 5) {
    if (sum >= 1000000) {
      return 4.5;
    } else if (sum >= 100000 && sum < 1000000) {
      return 4;
    } else {
      return 1.5;
    }
  } else if (period >= 6 && period <= 12) {
    if (sum >= 1000000) {
      return 5.5;
    } else if (sum >= 100000 && sum < 1000000) {
      return 4.5;
    } else {
      return 1.5;
    }
  } else {
    return 1.5;
  }
}