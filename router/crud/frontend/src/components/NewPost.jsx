import { Link, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import PostFormPage from './PostForm';

export default function NewPost() {
  const [saved, setSaved] = useState(false);

  const handleSubmit = value => {
    axios.post(process.env.REACT_APP_POSTS_URL, {id: 0, content: value})
    .then(() => setSaved(true))
    .catch(error => console.log(error.message))
  }

  return (
    <div className='new-post-container'>
      <div className='back-to-main'><Link to="/">Вернуться на главную</Link></div>
      <h3>Добавление поста</h3>
      <PostFormPage onSubmit={handleSubmit} />
      {saved && <Redirect to="/" />}
    </div>
  );
}