import React from 'react';
import { useDispatch } from 'react-redux';

export default function Error({ error, creator }) {
  const dispatch = useDispatch();

  if (!error) return null;

  return (
    <div>
      <p className='error'><strong>{'Ошибка: ' + error}</strong></p>
      <p>
        {creator ? 
        (<button onClick={() => dispatch(creator)}>Пробуем снова?</button>) : 
        (<p className='error'>Что сказать... Попробуйте ещё раз через какое-то время.</p>)
        }
      </p>
    </div>
  );
}