import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  return (
    <li className={props.className}>
      {props.children || props.title}
    </li>
  );
}

ListItem.propTypes = {
  className: PropTypes.string, 
  title: PropTypes.string
}