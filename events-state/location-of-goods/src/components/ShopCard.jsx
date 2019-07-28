import React from 'react';

export default function ShopCard(props) {
  const {products} = props;

  return (
    <div className='cards'>
      {products.map(product =>
        <div className='card'>
          <img src={product.img} alt={product.name}/>
          <h1>{product.name}</h1>
          <p>{product.color}</p>
          <div className='card-footer'>
              <span>${product.price}</span>
              <button className='add-to-cart'>add to cart</button>
            </div>
        </div>
      )}
    </div>
  );
}