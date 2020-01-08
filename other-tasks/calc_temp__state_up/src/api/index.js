import React from 'react';

// Функции для конвертации градусов по шкале Цельсия в Фаренгейт и обратно

export const toCelsius = fahrenheit => {
  return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

export const toFahrenheit = celsius => {
  return ((celsius * 9 / 5) + 32).toFixed(1);
}


/* Функция, которая принимает строку с температурой (temperature) 
** и функцию конвертации (convert) в качестве аргументов, и возвращает строку.
** 
** Возвращает пустую строку при некорректном значении аргумента temperature 
** и округляет возвращаемое значение до трёх чисел после запятой.
*/

export const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


/* Компонент принимает температуру по шкале Цельсия в качестве props celsius 
** и выводит вердикт, достаточна ли температура для кипения воды 
*/

export const BoilingVerdict = props => {
  if (!props.celsius) {
    return null;
  }
  return props.celsius >= 100 ? 
    <p className='status_boiled'>Вода закипит.</p> : 
    <p className='status_unboiled'>Вода не закипит.</p>;
}