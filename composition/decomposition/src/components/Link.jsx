import React from 'react';
import PropTypes from 'prop-types';

export default function Link(props) {
  return (
    <a href={props.href}>
      {props.title}
    </a>
  );
}

Link.propTypes= {
  href: PropTypes.string.isRequired,
  title: PropTypes.string
}