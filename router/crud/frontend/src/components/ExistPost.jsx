import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useLoadData from '../hooks/useLoadData';
import PostCard from './PostCard';
import PostForm from './PostForm';
import axios from 'axios';

export default function ExistPost({ match, history }) {
  const [data, loading, error, , setLoading, setError] = useLoadData('GET', process.env.REACT_APP_POSTS_URL);
  const [post, setPost] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const id = Number(match.params.id);
    return data ? setPost(data.find(o => o.id === id)) : setPost(null);
  }, [data, match.params.id]);

  const toggleEdit = () => {
    setEdit(prev => !prev);
  }

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`${process.env.REACT_APP_POSTS_URL}/${post.id}`)
    .then(() => setDeleted(true))
    .catch(error => {
      setLoading(false);
      setError(error.message);
    });
  }

  const handleEdit = value => {
    setLoading(true);
    axios.post(process.env.REACT_APP_POSTS_URL, {id: post.id, content: value})
    .then(() => history.go(0))
    .catch(error => {
      setLoading(false);
      setError(error.message);
    });
  }

  return (
    <>
      {deleted && <Redirect to="/" />}
      <p><Link to="/">Вернуться на главную страницу</Link></p>
      <h1>Пост</h1>
      <div className='status'>{ loading ? 'Загрузка…' : error }</div>
      {post && (edit
        ? 
        (
          <PostForm content={post.content} onSubmit={handleEdit}>
            <button onClick={toggleEdit}>Вернуться к просмотру</button>
          </PostForm>
        )
        : 
        (
          <PostCard {...post}>
            <button onClick={toggleEdit}>Редактировать</button>
            <button onClick={handleDelete}>Удалить</button>
          </PostCard>
      ))}
    </>
  );
}