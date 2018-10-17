const productsActions = {
  PRODUCTS_LIST_REQUEST: 'PRODUCTS_LIST_REQUEST',
  PRODUCTS_LIST_SUCCESS: 'PRODUCTS_LIST_SUCCESS',
  PRODUCTS_LIST_ERROR: 'PRODUCTS_LIST_ERROR',
  getList: () => ({
    type: productsActions.PRODUCTS_LIST_REQUEST,
  }),
};

export default productsActions;