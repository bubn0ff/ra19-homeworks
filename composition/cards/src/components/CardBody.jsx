import React from 'react';
import PropTypes from 'prop-types';

export default function CardBody(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      {props.children}
    </div>
  );
}

CardBody.propTypes = {
  title: PropTypes.string
}