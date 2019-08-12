import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <h1 className={props.className}>
      {props.children || props.title}
    </h1>
  );
}

Header.propTypes = {
  className: PropTypes.string, 
  title: PropTypes.string
}