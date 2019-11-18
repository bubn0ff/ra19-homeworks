import React from 'react';
import { useDispatch } from 'react-redux';

export default function Status({ title, creator }) {
  const dispatch = useDispatch();

  if (title === 'loading') {
    return <div className='status'>loading...</div>;
  } else {
    return (
      <>
        <div className='status'>An error has occurred! Check your code and console.</div>
        <button onClick={() => dispatch(creator)}>Повторить запрос</button>
      </>
    );
  }
}