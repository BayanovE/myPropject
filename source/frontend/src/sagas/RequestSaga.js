import { put, call } from 'redux-saga/effects'

import Api from "../domain/Api"

export default function* httpRequest(action) {
  
  const baseName = action.type.match(/^([A-Z,_]+HTTP_REQUEST)/)[0];
  //debugger;
  try {

    yield put({ type: `${baseName}_START`});
    const response = yield call(Api.httpRequest, action.payload);

    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();

      yield put({ 
        type: `${baseName}_SUCCESS`, 
        payload:{data} 
      });

    } else {
      throw response;
    }

  } catch (error) {

    yield put({ 
      type: `${baseName}_FAILED`, 
      payload: {error} 
    });

  }
}