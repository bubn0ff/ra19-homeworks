import React from 'react';

// Компонент иконки разметки, которая указывает на переключение между типами расположения товаров
export default function IconSwitch(props) {
  const {icon, onSwitch} = props;

  return (
    <div className='switcher'>
      <button onClick={onSwitch}><i className='material-icons'>{icon}</i></button>
    </div>
  );
}