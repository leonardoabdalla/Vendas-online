import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { title, price, thumbnail, details } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h2>{ title }</h2>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ details }</p>
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
