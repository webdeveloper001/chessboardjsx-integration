import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import App from './app/reducers'
import Rank from './rank/reducers'
import Wizard from './wizard/reducers'
import Chess from './chess/reducers'

const store = createStore(
  combineReducers({
    App,
    Rank,
    Wizard,
    Chess
  }),
  {},
  compose(applyMiddleware(thunk))
)

export default store
