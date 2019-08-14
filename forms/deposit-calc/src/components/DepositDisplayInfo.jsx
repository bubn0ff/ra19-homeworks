import React from 'react';

export default function DepositDisplayInfo(props) {
  return (
    <div className="display-info">
      <div className="deposit percent-rate">Ваша процентная ставка: {props.rate} %</div>
      <div className="deposit total-sum">Сумма к окончанию срока: {props.funcSum}</div>
    </div>
  );
}