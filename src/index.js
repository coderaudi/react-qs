import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import Thunk from "redux-thunk";
import reducers from "./reducer";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

const createHistory = require("history").createHashHistory;
const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(middleware, Thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
