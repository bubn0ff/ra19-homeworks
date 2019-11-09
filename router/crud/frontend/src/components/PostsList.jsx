import { Link } from 'react-router-dom';
import React from 'react';
import PostCardPage from './PostCard';

export default function PostsList({ list }) {

  return (
    <div className='post'>
      {list.map(post => (
        <PostCardPage key={post.id} {...post}>
          <Link to={`/posts/${post.id}`}>Детальнее...</Link>
        </PostCardPage>
      ))}
    </div>
  );
}