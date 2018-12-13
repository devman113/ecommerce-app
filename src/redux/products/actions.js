const productsActions = {
  PRODUCTS_LIST_REQUEST: 'PRODUCTS_LIST_REQUEST',
  PRODUCTS_LIST_SUCCESS: 'PRODUCTS_LIST_SUCCESS',
  PRODUCTS_LIST_ERROR: 'PRODUCTS_LIST_ERROR',
  PRODUCTS_MORE_REQUEST: 'PRODUCTS_MORE_REQUEST',
  PRODUCTS_MORE_SUCCESS: 'PRODUCTS_MORE_SUCCESS',
  getList: (payload) => ({
    type: productsActions.PRODUCTS_LIST_REQUEST,
    payload
  }),
  loadMore: (payload) => ({
    type: productsActions.PRODUCTS_MORE_REQUEST,
    payload
  }),
};

export default productsActions;