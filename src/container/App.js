import React from "react";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
import MainApp from "../routers/index";
import AppSignIn from "./signin";
import AppSignUp from "./signup";

function App() {
  return (
    <div>

            <Route exact path="/" component={AppSignIn} />
            <Route exact path="/signup" component={AppSignUp} />
            <Route path="/app" component={MainApp} />
    </div>
  );
}

export default App;
