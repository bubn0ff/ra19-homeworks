import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

// Компонент отображает рейтинг фильма в виде звёзд
export default function Stars(props) {
  const {count} = props;

  let visible = true;
  
  // если рейтинг меньше 1 или больше 5, или вообще не число - компонент не отображается
  if ((!Number.isInteger(count) || count < 1 || count > 5)) {
    visible = false;
  }
  
  return (
    visible && 
    (
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map((n, index) => (<Star key={index} />))}
      </ul>
    )
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
};