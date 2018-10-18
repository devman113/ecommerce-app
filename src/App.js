import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import productsActions from './redux/products/actions';

const { getList } = productsActions;

class App extends Component {

  componentWillMount() {
    const { getList } = this.props;
    getList(null);
  }

  updateGoods = options => {
    const { getList } = this.props;
    getList(options);
  }

  render() {
    const { productsList } = this.props; 
    console.log(productsList);
    return (
      <NavBar updateGoods={this.updateGoods} />
    );
  }
}

export default connect(
  state => ({
    productsList: state.Products.productsList
  }),
  { getList }
)(App);
