import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import "./assets/styles/sass/index.scss";
import './assets/styles/css/react-bootstrap-table2.min.css';
import './assets/styles/css/all.min.css';
import "./assets/styles/css/bootstrap.min.css";
import App from "./App";
import Dashboard from "./components/Dashboard";

import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/admin" component={Dashboard} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
