import React from 'react';
import PropTypes from 'prop-types';

export default function Span(props) {
  return (
    <span className={props.className}>
      {props.children || props.title}
    </span>
  );
}

Span.propTypes= {
  className: PropTypes.string,
  title: PropTypes.string
}