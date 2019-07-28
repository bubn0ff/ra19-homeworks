import React from 'react';

// Компонент отображения товаров в виде списка
export default function ListView(props) {
  const {items} = props;

  return (
    <div className='list-view'>
      {items}
    </div>
  );
}