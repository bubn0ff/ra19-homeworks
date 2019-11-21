import React from 'react';

export default function ServiceCard({ item }) {

  return (
    <div className='card'>
      <p>Услуга: </p>
      <p className='card-data'>{item.name}</p>
      <p>Цена: </p>
      <p className='card-data'>{item.price} руб.</p>
      <p>Подробнее: </p>
      <p className='card-data'>{item.content}</p>
    </div>
  );
}