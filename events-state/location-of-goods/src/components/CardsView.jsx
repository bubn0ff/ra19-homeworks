import React from 'react';

// Компонент отображения товаров в виде карточек
export default function CardsView(props) {
  const {cards} = props;

  return (
    <div className='cards-view'>
      {cards}
    </div>
  );
}