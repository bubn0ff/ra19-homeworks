import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import PropTypes from 'prop-types';

export default function Loading({ url }) {
  const [loading] = useJsonFetch(url);
  
  return (
    <>
      {loading && 'Загрузка...'}
    </>
  );
}

Loading.propTypes = {
  url: PropTypes.string.isRequired
}