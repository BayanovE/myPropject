export default function api(state = {}, {type, payload}) { // Это говно надо переписать как-то по нормальному
    let newState;
    const baseName = payload && payload.resource && `${payload.resource.toUpperCase()}_HTTP_REQUEST`;

    switch (type) {
        
        case(`${baseName}_START`):      //start
            newState = {...state};
            newState[baseName] = !newState[baseName] ? {
                    status: 'loading',
                    errorMessage: undefined,
                    data: []
                }: {
                    status: 'loading',
                    errorMessage: undefined,
                }
            
            return newState;

        case(`${baseName}_SUCCESS`):    //success
        
            newState = {...state};
            newState[baseName] = {
                status: 'success',
                errorMessage: undefined,
                data: payload.data,
                timestamp: new Date().getTime(),
            }
            return newState;

        case(`${baseName}_ERROR`):      //error

            newState = {...state};
            newState[baseName] = {
                status: 'error',
                errorMessage: undefined,
                error: payload.error, //TODO: add timestamp maybe
            }
            return newState;
        default:
            return state;
    }
  }