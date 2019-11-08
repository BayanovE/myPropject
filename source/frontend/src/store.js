import { createStore, applyMiddleware, compose } from 'redux'
import { middleware as fetchMiddleware } from 'react-redux-fetch'
import { createBrowserHistory } from 'history'
import loggerMiddleware from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from 'reducers'

const initialState = {}

export const history = createBrowserHistory()
const rootReducer = createRootReducer(history)

const middlewares = [
  loggerMiddleware,
  routerMiddleware(history),
  fetchMiddleware
]

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)
