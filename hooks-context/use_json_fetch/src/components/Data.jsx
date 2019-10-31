import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import PropTypes from 'prop-types';

export default function Data({ url }) {
  const [ data ] = useJsonFetch(url);
  
  return (
    <>
      {data}
    </>
  );
}

Data.propTypes = {
  url: PropTypes.string.isRequired
}