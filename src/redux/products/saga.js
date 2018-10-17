import { all, takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

const getProducts = async () => {
  try {
    return await axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');
  } catch (error) {
    console.error(error);
  }
};

export function* listRequest() {
  yield takeEvery('PRODUCTS_LIST_REQUEST', function* () {
    const productsData = yield getProducts();
    if (productsData) {
      console.log('Successfully fetched products list.');
      yield put({
        type: actions.PRODUCTS_LIST_SUCCESS,
        payload: productsData
      });
    } else {
      console.log('Failed to fetch products list.');
      yield put({
        type: actions.PRODUCTS_LIST_ERROR,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(listRequest),
  ]);
}