import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function WatchInput(props) {
  const [input, setInput] = useState({ 
    city: '', 
    timezone: '' 
  });

  // Обработчик формы
  const handleSubmit = event => {
    event.preventDefault();

    if (input.city.length === 0 || input.timezone === 0 || isNaN(input.timezone)) {
      return alert('Ошибка ввода! Проверьте правильность вводимых данных.');
    }

    props.handlerAdd(input);
    setInput({city: '', timezone: ''});
  }

  // Обработчик input
  const handleChange = event => {
    const field = event.target.name,
          value = event.target.value;
    setInput({...input, [field]: value});
  }

  return (
    <form className="form-input-data" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <th>Город</th>
            <th>Временная зона</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <input
                className='city-input'
                id='city' 
                name='city' 
                type='text'
                value={input.city} 
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className='timezone-input' 
                type='text' 
                name="timezone" 
                value={input.timezone} 
                onChange={handleChange}
              />
            </td>
            <td>
              <button className="submit" onClick={handleSubmit}>
                Добавить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

WatchInput.propTypes = {
  city: PropTypes.string,
  timezone: PropTypes.string
}