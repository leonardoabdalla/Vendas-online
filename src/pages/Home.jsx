import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Categories from '../components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import Card from '../components/Card';

class Home extends Component {
  state = {
    categories: [],
    inputValue: '',
    selectedId: '',
    productsItems: [],
    shoppingCart: {},
  }

  async componentDidMount() {
    const categories = await getCategories();
    const categoriesMenu = categories.map((categorie) => (
      <label htmlFor={ categorie.id } key={ categorie.name } data-testid="category">
        { categorie.name }
        <input
          id={ categorie.id }
          type="radio"
          name="category"
          onChange={ this.handleRadio }
        />
      </label>));

    this.setState({ categories: categoriesMenu });
  }

  countShoppingCartItens = (obj) => {
    const { id, title } = obj;
    const { shoppingCart } = this.state;
    if (!shoppingCart[id]) {
      shoppingCart[id] = { quantity: 1, title };
    } else {
      shoppingCart[id].quantity += 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }

  handleRadio = async ({ target: { id } }) => {
    this.filterResults(id);
    this.setState({ selectedId: id });
  }

  filterResults = async (productId, inputValue) => {
    const products = await getProductsFromCategoryAndQuery(productId, inputValue);

    const productsItems = products.results.map((product) => (
      <Card
        key={ product.id }
        { ...product }
        addToCart={ this.addToCart }
      />));
    this.setState({ productsItems });
  }

  handleClick = async () => {
    const { inputValue, selectedId } = this.state;
    this.filterResults(selectedId, inputValue);
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }

  addToCart = (obj) => {
    this.setState((prevState) => ({
      shoppingCart: { ...prevState.shoppingCart, obj },
    }), this.countShoppingCartItens(obj));
  }

  render() {
    const { categories, inputValue, productsItems, detailsRedirect } = this.state;
    return (
      <div>
        {
          detailsRedirect && <Redirect
            to={ {
              pathname: '/productdetail',
              // state: { id: '123' },
            } }
          />
        }
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
          value={ inputValue }
        />
        <button onClick={ this.handleClick } data-testid="query-button" type="button">
          Pesquisar
          countShoppingCartItens
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
