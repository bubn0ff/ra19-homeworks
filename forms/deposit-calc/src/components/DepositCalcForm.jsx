import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DepositDisplayInfo from './DepositDisplayInfo';
import DepositForm from './DepositForm';
import { CalcInterestRate } from '../components/CalcInterestRate';
import { CalcTotalSum } from '../components/CalcTotalSum';

export default class DepositCalcForm extends Component {
  state = {
    amount: '',
    months: '', 
    interestRate: 1.5
  };
  
  componentDidUpdate(prevProps, prevState) {
    if ((prevState.amount !== this.state.amount) || (prevState.months !== this.state.months)) {
      this.setState({interestRate: CalcInterestRate(this.state.amount, this.state.months)});
    }
  }

  handleAmountChange = event => {
    this.setState({amount: event.target.value});
  };

  handleMonthsChange = event => {
    this.setState({months: event.target.value});
  };

  render() {
    return (
      <form className="main-container">
        <DepositForm 
          className='deposit' 
          amount={this.state.amount} 
          months={this.state.months} 
          handlerAmount={this.handleAmountChange} 
          handlerMonths={this.handleMonthsChange}
        />
        <DepositDisplayInfo 
          rate={this.state.interestRate}
          funcSum={CalcTotalSum(this.state.amount, this.state.months, this.state.interestRate)}
        />
      </form>
    );
  }
}

DepositCalcForm.propTypes = {
  amount: PropTypes.string,
  months: PropTypes.string, 
  interestRate: PropTypes.string
}