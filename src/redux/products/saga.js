import { all, takeLatest, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

const getProducts = async (payload) => {
  try {
    let url = 'http://114.116.120.127:7001/api/v1/items?framePosition=0&frameSize=10';
    if (payload !== null) {
      if (payload.search !== '') url = `${url}&itemTitle=${payload.search}`;
      else url = `${url}&itemTitle=%81`;
      if (payload.minPrice) url = `${url}&minPrice=${payload.minPrice}`;
      if (payload.maxPrice) url = `${url}&maxPrice=${payload.maxPrice}`;
      if (payload.minMOQ) url = `${url}&minMOQ=${payload.minMOQ}`;
      if (payload.language) url = `${url}&translateLanguageCode=${payload.language}`;
      if (payload.currency) url = `${url}&toCurrencyName=${payload.currency}`;

      let provider = 'Alibaba1688,Taobao'
      if (payload.checkedAlibaba && !payload.checkedTaobao) provider = 'Alibaba1688';
      else if (!payload.checkedAlibaba && payload.checkedTaobao) provider = 'Taobao';
      url = `${url}&provider=${provider}`;
    } else {
      url = `${url}&itemTitle=%81&provider=Alibaba1688,Taobao`;
    }
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

export function* listRequest() {
  yield takeLatest('PRODUCTS_LIST_REQUEST', function* ({ payload }) {
    const productsData = yield getProducts(payload);
    if (productsData) {
      let payload = [];
      if (productsData.data[0].OtapiItemSearchResultAnswer) {
        payload = productsData.data[0].OtapiItemSearchResultAnswer.Result[0].Items[0].Content[0].Item;
        if (productsData.data[1].OtapiItemSearchResultAnswer)
          payload = payload.concat(productsData.data[1].OtapiItemSearchResultAnswer.Result[0].Items[0].Content[0].Item);
        yield put({
          type: actions.PRODUCTS_LIST_SUCCESS,
          payload: payload
        });
      }
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