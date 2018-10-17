import { all } from 'redux-saga/effects';
import productsSagas from './products/saga';

export default function* rootSaga(getState) {
  yield all([
    productsSagas()
  ]);
}