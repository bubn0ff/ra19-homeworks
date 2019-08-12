import React from 'react';
import PropTypes from 'prop-types';

export default function Container(props) {
  return (
    <div className={props.className}>
      {props.children || props.title}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string, 
  title: PropTypes.string
}