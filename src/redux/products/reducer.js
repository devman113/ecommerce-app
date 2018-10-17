import actions from './actions';

const initState = {
  productsList: [],
};

export default function productsReducer(state = initState, action) {
  switch (action.type) {
  case actions.PRODUCTS_LIST_SUCCESS:
    return { productsList: action.payload };
  default:
    return state;  
  }
}