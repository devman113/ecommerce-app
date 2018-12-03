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
    const { productsList, loading } = this.props; 

    return (
      <NavBar updateGoods={this.updateGoods} productsList={productsList} loading={loading} />
    );
  }
}

export default connect(
  state => ({
    productsList: state.Products.productsList,
    loading: state.Products.loading
  }),
  { getList }
)(App);
