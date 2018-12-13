import actions from './actions';

const initState = {
  productsList: [],
  loading: false
};

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case actions.PRODUCTS_LIST_REQUEST:
      return { productsList: [], loading: true };
    case actions.PRODUCTS_MORE_REQUEST:
      return { ...state, loading: true };
    case actions.PRODUCTS_LIST_SUCCESS:
      return { productsList: action.payload, loading: false };
    case actions.PRODUCTS_MORE_SUCCESS:
      const pp = action.payload;
      return { productsList: [...state.productsList, ...pp], loading: false };
  default:
    return state;  
  }
}