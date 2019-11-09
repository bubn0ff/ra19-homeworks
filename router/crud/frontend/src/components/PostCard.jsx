import React from 'react';
import moment from 'moment';

export default function PostCard({ id, content, created, children }) {
  const newData = moment(created).format('DD.MM.YYYY HH:mm:ss');

  return (
    <div className='post-item'>
      <small>{newData}</small>
      <h5>Пост №{id}</h5>
      <p>{content}</p>
      {children}
    </div>
  );
}