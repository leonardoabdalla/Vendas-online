import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  addToCart2 = () => {
    const shoppingCartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    const { location } = this.props;
    const { details } = location;
    const { id, title } = details;
    if (!shoppingCartItems[id]) {
      shoppingCartItems[id] = { quantity: 1, title };
    } else {
      shoppingCartItems[id].quantity += 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartItems));
  }

  render() {
    const { location } = this.props;
    const { details } = location;
    const { title, price, thumbnail, attributes } = details;
    console.log(location);

    return (
      <div data-testid="product-detail-name">
        <h2>{ title }</h2>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <ul>
          {attributes.map((attribute) => (

            <li key={ attribute.id }>
              {`${attribute.name}: ${attribute.value_name}`}
            </li>))}
        </ul>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart2 }
          type="button"
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

ProductDetail.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  details: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductDetail;
