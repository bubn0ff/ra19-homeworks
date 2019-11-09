import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  
  return (
    <div className='error_404'>
      <h1 className='error_404_header'>ОШИБКА 404</h1>
      <p className='error_404_text'>Страница не найдена</p>
      <p className='error_404_emoji'>¯\_(ツ)_/¯</p>
      <p className='error_404_link'>
        <Link to='/'>Перейти на главную страницу</Link>
      </p>
    </div>
  );
}