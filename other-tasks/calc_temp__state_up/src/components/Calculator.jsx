import React from 'react';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit, BoilingVerdict } from '../api/index';

/* Калькулятор температуры (по старинке с props). Два поля ввода синхронизированы друг с другом. 
** Когда обновляется поле ввода градусов по Цельсию, поле ввода градусов по Фаренгейту 
** отражает сконвертированную температуру и наоборот.
*/

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '', 
      scale: 'c',
    };
  }

  handleCelsiusChange = temperature => {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = temperature => {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} 
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} 
        />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}