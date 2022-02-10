import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <p>Categorias:</p>
        { categories }
      </div>);
  }
}

Categories.propTypes = { categories: PropTypes.arrayOf(PropTypes.object).isRequired };
export default Categories;
