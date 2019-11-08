import * as types from "./constants";

export default function auth(state = {}, {type, payload}) {
    switch (type) {
        
        case types.LOGIN:
            return state;

        default: 
            return state;
        
    }
}