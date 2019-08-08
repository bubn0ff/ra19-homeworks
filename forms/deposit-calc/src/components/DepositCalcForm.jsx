import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayInfo from './DisplayInfo';

export default class DepositCalc extends Component {
  state = {
    amount: '',
    months: ''
  };

  handleAmountChange = event => {
    this.setState({amount: event.target.value});
  };

  handleMonthsChange = event => {
    this.setState({months: event.target.value});
  };

  render() {
    return (
      <form className="main-container">
        <div className="container">
          <div className="deposit">
            <label htmlFor="input-sum">Сумма</label> 
            <input 
              id="input-sum" 
              type="text" 
              name="sum" 
              maxlength='12'
              value={this.state.amount} 
              onChange={this.handleAmountChange} 
            />
            
            <label htmlFor="input-months">Срок (в месяцах)</label>
            <input 
              id="input-months" 
              type="text" 
              name="months" 
              maxlength='5'
              value={this.state.months} 
              onChange={this.handleMonthsChange} 
            />
          </div>
        </div>
        <DisplayInfo months={this.state.months} amount={this.state.amount} />
      </form>
    );
  }
}

DepositCalc.propTypes = {
  amount: PropTypes.string,
  months: PropTypes.string
}