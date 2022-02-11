import React, { Component } from 'react';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  render() {
    const itemInformation = JSON.parse(localStorage.getItem('shoppingCart'));
    return (
      <div>
        {
          itemInformation ? <CartItem />
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}

export default ShoppingCart;
