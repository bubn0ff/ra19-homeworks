import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  
  return (
    <div>
      <h1 className='not-found'>ОШИБКА 404</h1>
      <p className='not-found'>Страница не найдена</p>
      <p className='not-found'>¯\_(ツ)_/¯</p>
      <p><Link to='/'>Перейти на главную страницу</Link></p>
    </div>
  );
}