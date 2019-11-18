import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesList({ items }) {

  return (
    <ul className='list'>
      {items.map(item => (
        <li key={item.id}>
          <span><Link to={`/${item.id}/details`}>{item.name}</Link>: {item.price}&nbsp;руб.</span>
        </li>
      ))}
    </ul>
  );
}