import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as fetchReducer } from 'react-redux-fetch'

import sample from './sample'

export default (history) => combineReducers({
  router: connectRouter(history),
  repository: fetchReducer,
  sample
})
