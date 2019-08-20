import React from 'react';
import PropTypes from 'prop-types';

export default function NoteButton(props) {
  return (
    <button className={props.className} type={props.type} >
      {props.children || props.title}
    </button>
  );
}

NoteButton.propTypes = {
  className: PropTypes.string, 
  type: PropTypes.string, 
  title: PropTypes.string
}