import React from 'react';
import PropTypes from 'prop-types';

export default function DepositForm(props) {
  return (
    <div className='container'>
      <div className={props.className}>
        <label htmlFor="input-sum">Сумма</label> 
        <input 
          id="input-sum" 
          type="text" 
          maxLength='12'
          value={props.amount} 
          onChange={props.handlerAmount} 
        />
        
        <label htmlFor="input-months">Срок (в месяцах)</label>
        <input 
          id="input-months" 
          type="text" 
          maxLength='5'
          value={props.months} 
          onChange={props.handlerMonths} 
        />
      </div>
    </div>
  );
}

DepositForm.propTypes = {
  className: PropTypes.string, 
  amount: PropTypes.string, 
  months: PropTypes.string, 
  handlerAmount: PropTypes.func
}