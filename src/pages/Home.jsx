import React, { Component } from 'react';
import Categories from '../Components/Categories';
import { getCategories } from '../services/api';
import ButtonShoppingCart from '../components/ButtonShoppingCart';

class Home extends Component {
  state = {
    categories: [],
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

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" />
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
