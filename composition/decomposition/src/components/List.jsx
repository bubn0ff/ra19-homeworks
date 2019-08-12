import React from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
  return (
    <ul className={props.className}>
      {props.children(props.items)}
    </ul>
  );
}

List.propTypes= {
  className: PropTypes.string,
  items: PropTypes.array
}