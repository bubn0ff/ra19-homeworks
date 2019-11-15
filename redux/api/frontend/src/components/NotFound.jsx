import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  
  return (
    <div>
      <h1>ОШИБКА 404</h1>
      <p>Страница не найдена</p>
      <p>¯\_(ツ)_/¯</p>
      <p><Link to='/'>Перейти на главную страницу</Link></p>
    </div>
  );
}