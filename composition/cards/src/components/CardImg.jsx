import React from 'react';
import PropTypes from 'prop-types';

export default function CardImg(props) {
  return (
    <img src={props.src} className="card-img-top" alt={props.name} />
  );
}

CardImg.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string
}