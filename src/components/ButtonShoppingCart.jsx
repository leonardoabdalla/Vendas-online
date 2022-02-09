import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShoppingCart extends Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/shoppingcart"
      >
        Carrinho de Compras
      </Link>
    );
  }
}

export default ButtonShoppingCart;
