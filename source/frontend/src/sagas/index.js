import { takeLeading, all} from 'redux-saga/effects'

import httpRequest from "./RequestSaga"

function* watchHttpRequest() {
  yield takeLeading(action => /^([A-Z,_]+HTTP_REQUEST)/.test(action.type),  httpRequest);
}

// обратите внимание, как мы экспортируем rootSaga
// единая точка входа для запуска всех Саг одновременно
export default function* rootSaga() {
  yield all([
    watchHttpRequest(),
  ])
}