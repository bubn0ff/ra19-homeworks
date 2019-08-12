import React from 'react';
import PropTypes from 'prop-types';

export default function Image(props) {
  return (
    <img 
      className={props.className} 
      src={props.src} 
      alt={props.alt} 
      width={props.width} 
      height={props.height} 
    />
  );
}

Image.propTypes= {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}