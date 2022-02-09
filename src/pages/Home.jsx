import React, { Component } from 'react';
import ButtonShoppingCart from '../components/ButtonShoppingCart';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ButtonShoppingCart />
      </div>
    );
  }
}

export default Home;
