export default function api(state = {}, {type, payload}) {
    let newState;

    switch (true) {
        
        case(/^([A-Z,_]+HTTP_REQUEST_START$)/.test(type)):      //start

            newState = {...state};
            newState[type.match(/^([A-Z,_]+HTTP_REQUEST)/)[0]] = {
                status: 'loading',
                errorMessage: undefined,
            }
            return newState;

        case(/^([A-Z,_]+HTTP_REQUEST_SUCCESS$)/.test(type)):    //success
        
            newState = {...state};
            newState[type.match(/^([A-Z,_]+HTTP_REQUEST)/)[0]] = {
                status: 'success',
                errorMessage: undefined,
                data: payload.data,
                timestamp: new Date().getTime(),
            }
            return newState;

        case(/^([A-Z,_]+HTTP_REQUEST_ERROR$)/.test(type)):      //error

            newState = {...state};
            newState[type.match(/^([A-Z,_]+HTTP_REQUEST)/)[0]] = {
                status: 'error',
                errorMessage: undefined,
                error: payload.error,
            }
            return newState;
        default:
            return state;
    }
  }