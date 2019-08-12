import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  return (
    <input 
      type={props.type} 
      size={props.size} 
      name={props.className} 
      className={props.className} 
    />
  );
}

Input.propTypes= {
  type: PropTypes.string.isRequired,
  size: PropTypes.string, 
  name: PropTypes.string, 
  className: PropTypes.string
}