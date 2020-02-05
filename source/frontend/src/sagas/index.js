import { takeLeading, all, take, select, buffers, takeEvery, call} from 'redux-saga/effects'

import httpRequest, {newHttpRequest} from "./RequestSaga"

const getRequest = state => state.api;

function* watchHttpRequest() {
  yield takeLeading(action => /^([A-Z,_]+HTTP_REQUEST)/.test(action.type),  httpRequest);
  // while(true) {
  //   const { data } = yield take(action => /^([A-Z,_]+HTTP_REQUEST)/.test(action.type),  httpRequest);
    
  //   const state = yield select(getRequest);
  // }
}

function* watchHttpRequest2() {
  // while (true) {
  //   const action = yield take('INIT_HTTP_REQUEST');
  //   yield call(saga, ...args.concat(action));
  // }

  
  let activeRequests = {};
  yield takeEvery('INIT_HTTP_REQUEST', newHttpRequest, activeRequests);
  //debugger
  
}

// обратите внимание, как мы экспортируем rootSaga
// единая точка входа для запуска всех Саг одновременно
export default function* rootSaga() {
  yield all([
    //watchHttpRequest(),
    watchHttpRequest2(),
  ])
}