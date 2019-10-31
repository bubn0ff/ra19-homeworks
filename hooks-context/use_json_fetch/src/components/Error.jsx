import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import PropTypes from 'prop-types';

export default function Error({ url }) {
  const [ error ] = useJsonFetch(url);
  
  return (
    <>
      {error && 'Ошибка!'}
    </>
  );
}

Error.propTypes = {
  url: PropTypes.string.isRequired
}