
/*
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import Thunk from 'redux-thunk';
import { Router, Route, Switch } from 'react-router-dom';
// import createHistory from 'history/createHashHistory';
import reducers from './reducers';

// // css
// import './lib/reactifyCss';

// firebase


// app component
import App from './container/App';

// Create a history of your choosing (we're using a hash history in this case)
// const history = createHistory();

const history = {};
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(reducers,
  applyMiddleware(middleware, Thunk)
)

ReactDOM.render(
  <Provider store={store}>
    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    {/* </MuiPickersUtilsProvider> */}
  </Provider>, document.getElementById('root'));

