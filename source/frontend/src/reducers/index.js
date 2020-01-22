import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as fetchReducer } from 'react-redux-fetch'
import api from './Api'

import value from './sample'

export default (history) => combineReducers({
  router: connectRouter(history),
  repository: fetchReducer,
  value, 
  api,
})
