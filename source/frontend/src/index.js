import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import 'typeface-roboto';

import './index.css'
import * as serviceWorker from './serviceWorker'
import { history, store } from './store'

import routes from './routes/index';
import Main from './pages/Main'
import CompetitorsList from './pages/Competitors'
import Page404 from './pages/Page404'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path={routes.main} render={() => (<Main />)} />
          <Route exact path={routes.competitors} render={() => <CompetitorsList />} />
          <Route exact path={routes.signin} render={() => <SignIn />} />
          <Route exact path={routes.signup} render={() => <SignUp />} />

          <Route render={() => <Page404 />} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()