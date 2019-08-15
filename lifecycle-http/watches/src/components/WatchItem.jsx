import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WatchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null,
      minutes: null,
      hours: null,
      interval: null,
    };
  }

  setDate = () => {
    let nowDate = new Date();

    const nowSeconds = nowDate.getSeconds(),
          nowMinutes = nowDate.getMinutes(),
          calcHours = nowDate.getHours() - this.props.moscowTimezone + this.props.timezone;

    const seconds = (nowSeconds / 60) * 360 + 90,
          minutes = (nowMinutes / 60) * 360 + 90,
          hours = (calcHours / 12) * 360 + 90;

    this.setState({
      seconds,
      minutes,
      hours,
    });
  }

  markDelete = () => {
    this.props.handleDelete(this.props.id);
  }

  componentDidMount() {
    this.interval = setInterval(this.setDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='clock-container'>
        <div className='city-and-X'>
          <span>{this.props.city}</span>
          <span 
            role='img' 
            aria-label='delete' 
            className='mark-delete' 
            onClick={this.markDelete}
          >
            ✖
          </span>
        </div>
        <div className='clock'>
          <div>
            <div className='hand-container hour-face'>
              <div
                className='hand hour-hand'
                style={{transform: `rotate(${this.state.hours}deg)`}}
              />
            </div>
            <div className='hand-container min-face'>
              <div
                className='hand min-hand'
                style={{transform: `rotate(${this.state.minutes}deg)`}}
              />
            </div>
            <div className='hand-container second-face'>
              <div
                className='hand second-hand'
                style={{transform: `rotate(${this.state.seconds}deg)`}}
              />
            </div>
            <div className='watch-center-circle' />
          </div>
        </div>
      </div>
    );
  }
}

WatchItem.propTypes = {
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  hours: PropTypes.number,
  interval: PropTypes.number
}