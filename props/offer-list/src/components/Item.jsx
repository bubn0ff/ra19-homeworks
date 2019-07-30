import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  const {item} = props;

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{makeShortTitle(item.title)}</p>
        <p className="item-price">{addCurrencySymbol(item.currency_code, item.price)}</p>
        <p className={`item-quantity level-${showQuantityLevel(item.quantity)}`}>
          {item.quantity + ' left'}
        </p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    MainImage: PropTypes.object,
    url: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
  }),
};

// Добавляем значок валюты
function addCurrencySymbol(currency, price) {
  if (currency === 'USD') {
    return '$' + price;
  }

  if (currency === 'EUR') {
    return '€' + price;
  }

  return price + ' GBP';
}

// Показываем остаток
function showQuantityLevel(quantity) {
  if (quantity <= 10) {
    return 'low';
  }
  
  if (quantity <= 20) {
    return 'medium';
  }

  return 'high';
}

// Обрезаем title, если он больше 50 символов
function makeShortTitle(title) {
  return (title.length > 50) ? (title.slice(0, 49) + '...') : title;
}