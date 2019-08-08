import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DisplayInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interestRate: 1.5,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calcInterestRate();
    }
  }

  calcInterestRate = () => {
    let {amount, months} = this.props;
    
    if (!Number(amount) || !Number(months)) return false;

    if (months >= 1 && months <= 5) {
      if (amount >= 1000000) {
        this.setState({interestRate: 4.5});
      } else if (amount >= 100000 && amount < 1000000) {
        this.setState({interestRate: 4});
      } else {
        this.setState({interestRate: 1.5});
      }
    } else if (months >= 6 && months <= 12) {
      if (amount >= 1000000) {
        this.setState({interestRate: 5.5});
      } else if (amount >= 100000 && amount < 1000000) {
        this.setState({interestRate: 4.5});
      } else {
        this.setState({interestRate: 1.5});
      }
     } else {
       this.setState({interestRate: 1.5});
    }
  };

  calcTotalSum = () => {
    let {amount, months} = this.props;

    if (!Number(amount) || !Number(months)) return false;

    let totalAmount = amount / 100;
    let totalMonths = (months * 30) / 365;
    let amountAtMaturity = Math.round(totalAmount * this.state.interestRate * totalMonths);

    return amountAtMaturity;
  };

  render() {
    return (
      <div className="display-info">
        <div className="deposit percent-rate">Ваша процентная ставка: {this.state.interestRate} %</div>
        <div className="deposit total-sum">Сумма к окончанию срока: {this.calcTotalSum()}</div>
      </div>
    );
  }
}

DisplayInfo.propTypes = {
  interestRate: PropTypes.string
}