import React from 'react';

export default function ShopItem(props) {
  const {products} = props;

  return (
    <div className='list'>
      {products.map(product => 
        <div className='item'>
          <img src={product.img} alt={product.name}/>
          <h1>{product.name}</h1>
          <p>{product.color}</p>
          <span>${product.price}</span>
          <button className='add-to-cart'>add to cart</button>
        </div>
      )}
    </div>
  );
}