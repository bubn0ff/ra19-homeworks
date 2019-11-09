import React, { useState } from 'react';

export default function PostForm(props) {
  const [value, setValue] = useState(props.content || '');

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(value);
  }

  const handleInput = event => {
    const {value} = event.target;
    setValue(prev => value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="textarea" value={value} onChange={handleInput} />
        <button>{props.content === undefined ? 'Опубликовать' : 'Сохранить'}</button>
        {props.children}
      </form>
    </div>
  );
}