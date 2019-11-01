import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import PropTypes from 'prop-types';

export default function MyHook({ url }) {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <>
      {data && data.status}
      {loading && 'Загрузка...'}
      {error && error.message}
    </>
  );
}

MyHook.propTypes = {
  url: PropTypes.string.isRequired
}