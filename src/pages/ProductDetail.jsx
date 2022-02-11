import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { location } = this.props;
    const { details } = location;
    const { title, price, thumbnail, attributes } = details;

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
