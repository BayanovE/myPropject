import {
    put,
    call,
    select
} from 'redux-saga/effects'

import Api from "../domain/Api"

export function* newHttpRequest (activeRequests, action) {
    const baseName = `${action.payload.resource.toUpperCase()}_HTTP_REQUEST`;
    //debugger;

    if(activeRequests[baseName]){
        return;
    }

    try {
        activeRequests[baseName] = true;
        yield put({
            type: `${baseName}_START`,
            payload: {
                resource: action.payload.resource,
            }
        });
        
        const response = yield call(Api.httpRequest, action.payload);

        if (response.status >= 200 && response.status < 300) {
            const data = yield response.json();
         
            activeRequests[baseName] = false;
            yield put({
                type: `${baseName}_SUCCESS`,
                payload: {
                    data,
                    resource: action.payload.resource,
                }
            });

        } else {
            throw response;
        }

    } catch (error) {

        activeRequests[baseName] = true
        yield put({
            type: `${baseName}_FAILED`,
            payload: {
                resource: action.payload.resource,
                error
            }
        });

    }
}

export default function* httpRequest(action) {

    const baseName = action.type.match(/^([A-Z,_]+HTTP_REQUEST)/)[0];
    //debugger;
    try {

        yield put({
            type: `${baseName}_START`
        });
        const response = yield call(Api.httpRequest, action.payload);

        if (response.status >= 200 && response.status < 300) {
            const data = yield response.json();

            yield put({
                type: `${baseName}_SUCCESS`,
                payload: {
                    data
                }
            });

        } else {
            throw response;
        }

    } catch (error) {

        yield put({
            type: `${baseName}_FAILED`,
            payload: {
                error
            }
        });

    }
}