import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Компонент отображения вводимой информации (верхняя часть таблицы)
export default function Input(props) {
  const {onEnter} = props;

  const [input, setInput] = useState({
    date: '',
    km: '',
  });

  const inputDate = useRef();

  const onAdd = (value, event) => {
    setInput({...input, [value]: event.target.value});
  };

  // обработчик нажатия кнопки OK
  const onOK = e => {
    e.preventDefault();

    if (checkIsDataValid(input)) {
      return alert('Ошибка ввода! Проверьте правильность введённых данных.');
    }

    onEnter(input);
    setInput({date: '', km: ''});
    inputDate.current.focus();
  };

  return (
    <form>
      <table className="input-table">
        <tbody>
          <tr>
            <th>Дата (ДД.ММ.ГГГГ)</th>
            <th>Пройдено, км</th>
            <th>Подтвердить</th>
          </tr>
          <tr>
            <td>
              <input
                onChange={event => onAdd('date', event)}
                value={input.date}
                ref={inputDate}
                title="Введите дату в формате ДД.ММ.ГГГГ"
              />
            </td>
            <td>
              <input 
                onChange={event => onAdd('km', event)} 
                value={input.km} 
                title="Введите пройденное расстояние с точностью до одной десятой"
              />
            </td>
            <td className="container-button">
              <button title="Подтвердите ввод данных" className="input-button" onClick={onOK}>
                OK
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

Input.propTypes = {
  onEnter: PropTypes.func
};

// Проверка на правильность введённых данных при подтверждении
function checkIsDataValid(walk) {
  const regexDate = /^\d\d\.\d\d\.\d\d\d\d$/;
  const regexKm = /^\d+(\.\d+)?$/;
  
  if (regexDate.test(walk.date) && regexKm.test(walk.km)) {
    return false;
  }
  
  return true;
}