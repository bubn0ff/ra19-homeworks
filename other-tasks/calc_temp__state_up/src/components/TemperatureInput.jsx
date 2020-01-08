import React from 'react';

export default class TemperatureInput extends React.Component {
  handleChange = event => {
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Введите температуру в {scaleNames[this.props.scale]}:</legend>
        <input 
          placeholder='Введите число'
          value={this.props.temperature}
          onChange={this.handleChange} 
        />
      </fieldset>
    );
  }
}

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта'
};