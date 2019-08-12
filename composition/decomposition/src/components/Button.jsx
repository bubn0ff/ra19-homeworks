import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button className={props.className}>
      {props.children || props.title}
    </button>
  );
}

Button.propTypes= { 
  className: PropTypes.string, 
  title: PropTypes.string
}