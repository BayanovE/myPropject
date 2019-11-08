import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import 'typeface-roboto';


import Intro from './components/pages/Intro/Intro'
import Game from './components/pages/Game/Game'
import HallOfFame from './components/pages/HallOfFame/HallOfFame'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { history, store } from './store'
import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"
import PokemonList from './components/pages/SignUp/test'
import CompetitorsList from './components/pages/Competitors'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" render={() => (<Intro />)} />
          <Route exact path="/game" render={() => <Game />} />
          <Route exact path="/fame" render={() => <HallOfFame />} />
          <Route exact path="/signin" render={() => <SignIn />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route exact path="/poke" render={() => <PokemonList />} />
          <Route exact path="/competitors" render={() => <CompetitorsList />} />

          <Route render={() => (<div>{"Do something with it! It's not supposed to be an Easter Egg!"}</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()