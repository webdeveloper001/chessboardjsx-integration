import React from 'react';
import { Provider } from 'react-redux';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import store from './store';
import Wizard from './views/wizard'
import Chessboard from './views/chessboard'
import Header from './components/header'

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route
              path="/wizard"
              component={Wizard}
            />
            <Route
              path="/chessboard"
              component={Chessboard}
            />
            <Route
              path=''
              exact
              component={()=><Redirect to='/wizard'/>}
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
