import React from 'react';
import { Link } from 'react-router-dom';
import useLoadData from '../hooks/useLoadData';
import PostsListPage from './PostsList';

export default function Main() {
  const [data, loading, error] = useLoadData('GET', process.env.REACT_APP_POSTS_URL);

  return (
    <div>
      <h2>Все посты</h2>
      <div className='create-post-page'><Link to='/posts/new'>Создать пост</Link></div>
      <div className='status'>{ loading ? 'Загрузка…' : error }</div>
      {data && <PostsListPage list={data} />}
    </div>
  );
}