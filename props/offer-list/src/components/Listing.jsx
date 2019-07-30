import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function Listing(props) {
  const {items} = props;
  
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.listing_id} item={item} />
      ))}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      listing_id: PropTypes.number,
      url: PropTypes.string,
      MainImage: PropTypes.object,
      title: PropTypes.string,
      currency_code: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number
    }),
  )
};