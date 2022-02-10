import React, { Component } from 'react';
import Categories from '../components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import Card from '../components/Card';

class Home extends Component {
  state = {
    categories: [],
    inputValue: '',
    productsItems: [],
  }

  async componentDidMount() {
    const categories = await getCategories();
    const categoriesMenu = categories.map((categorie, index) => (
      <label htmlFor={ index } key={ categorie.name } data-testid="category">
        { categorie.name }
        <input id={ index } type="radio" />
      </label>));

    this.setState({ categories: categoriesMenu });
  }

  handleClick = async () => {
    const { inputValue } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputValue);
    const productsItems = products.results.map((product) => (
      <Card
        key={ product.id }
        { ...product }
      />));
    this.setState({ productsItems });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }

  render() {
    const { categories, inputValue, productsItems } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
          value={ inputValue }
        />
        <button onClick={ this.handleClick } data-testid="query-button" type="button">
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories categories={ categories } />
        <ButtonShoppingCart />
        { productsItems }
      </div>
    );
  }
}

export default Home;
