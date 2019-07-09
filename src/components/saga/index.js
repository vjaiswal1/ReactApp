import {
  call, put, takeEvery, select, all, take,
} from 'redux-saga/effects';

import {
  RECEIVE_API_DATA,
  receiveApiData,
  CLICK_REQUEST_DATA,
  clickStoreData,
  FILTERED_DATA,
  filteredFunc,
} from 'Components/actions';
import { fetchData } from 'src/api';
import { fetchDetailMovie } from 'src/api/fetchDetailMovie';

const getPage = state => state.nextPage;
function* fetchProducts() {
  const page = yield select(getPage);
  const dataDetail = yield call(fetchData, page);
  yield put(receiveApiData(dataDetail));
}
function* clickUpdateData(action) {
  try {
    while (true) {
      const page = yield select(getPage);
      const dataDetail = yield call(
        fetchDetailMovie,
        action.params,
        action.data,
        page,
      );
      yield put(clickStoreData(dataDetail));
    }
  } finally {
    if (yield cancelled()) yield put(actions.requestFailure('Sync cancelled!'));
  }
}
function* filteredData() {
  const action = yield take(FILTERED_DATA);
  yield put(filteredFunc(action.filteredTitle));
}
function* mySaga() {
  yield all([RECEIVE_API_DATA, fetchProducts()]);
  yield takeEvery(CLICK_REQUEST_DATA, clickUpdateData);
  yield all([FILTERED_DATA, filteredData()]);
}
export default mySaga;
