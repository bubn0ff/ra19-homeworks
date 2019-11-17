import React from 'react';

export default function Status({ title }) {
  if (title === 'loading') {
    return <div className='status'>loading...</div>;
  } else {
    return <div className='status'>An error has occurred! Check your code and console.</div>;
  }
}