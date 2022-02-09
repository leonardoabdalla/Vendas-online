import React, { Component } from 'react';
import Categories from '../components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import Card from '../components/Card';

class Home extends Component {
  state = {
    categories: [],
    // result: [],
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

  handleClick = async ({ target: { value } }) => {
    const product = await getProductsFromCategoryAndQuery(value);

    console.log(product);
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input data-testid="query-input" type="text" />
        <button onClick={ this.handleClick } data-testid="query-button" type="button">
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories categories={ categories } />
        <ButtonShoppingCart />
      </div>
    );
  }
}

export default Home;
