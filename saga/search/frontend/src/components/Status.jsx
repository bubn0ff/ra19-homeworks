import React from 'react';

export default function Status({ title }) {
  if (title === 'loading') {
    return <div className='status'>loading...</div>;
  }
  
  if (title === 'error') {
    return <div className='status'>An error has occurred! Check your code and console.</div>;
  }

  if (title === 'type') {
    return <div className='status'>Type something to search</div>;
  }

  return null;
}