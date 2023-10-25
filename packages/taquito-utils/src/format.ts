import BigNumber from 'bignumber.js';

const TZ_DECIMALS = 6;
const MTZ_DECIMALS = 3;

type Format = 'tz' | 'mtz' | 'mumav';

function getDecimal(format: Format) {
  switch (format) {
    case 'tz':
      return TZ_DECIMALS;
    case 'mtz':
      return MTZ_DECIMALS;
    case 'mumav':
    default:
      return 0;
  }
}

export function format(
  from: Format = 'mumav',
  to: Format = 'mumav',
  amount: number | string | BigNumber
) {
  const bigNum = new BigNumber(amount);
  if (bigNum.isNaN()) {
    return amount;
  }

  return bigNum
    .multipliedBy(Math.pow(10, getDecimal(from)))
    .dividedBy(Math.pow(10, getDecimal(to)));
}
