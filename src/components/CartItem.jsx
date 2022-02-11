import React from 'react';

class CartItem extends React.Component {
  render() {
    const itemInformation = JSON.parse(localStorage.getItem('shoppingCart'));
    return (
      <div>
        {Object.values(itemInformation).map((item) => (
          <div
            key={ item.title }
          >
            <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CartItem;
