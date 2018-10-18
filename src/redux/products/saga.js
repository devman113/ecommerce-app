import { all, takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

const getProducts = async (payload) => {
  try {
    let url = 'http://localhost:7001/api/v1/items?framePosition=0&frameSize=20';
    if (payload !== null) {
      if (payload.search !== '') url = `${url}&itemTitle=${payload.search}`;
      else url = `${url}&itemTitle=%81`;
    } else {
      url = `${url}&itemTitle=%81`;
    }
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

export function* listRequest() {
  yield takeEvery('PRODUCTS_LIST_REQUEST', function* ({ payload }) {
    const productsData = yield getProducts(payload);
    if (productsData) {
      console.log('Successfully fetched products list.', productsData);
      if (productsData.data.OtapiItemSearchResultAnswer)
        yield put({
          type: actions.PRODUCTS_LIST_SUCCESS,
          payload: productsData.data.OtapiItemSearchResultAnswer.Result[0].Items[0].Content[0].Item
        });
      else {
        console.log('Failed to fetch products list.');
        yield put({
          type: actions.PRODUCTS_LIST_ERROR,
        });
      } 
    } 
  });
}

export default function* rootSaga() {
  yield all([
    fork(listRequest),
  ]);
}