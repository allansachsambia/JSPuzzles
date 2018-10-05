import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./landing/Landing";
import Play from "./play/Play";
import Finished from "./finished/Finished";
import Styles from "./app.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/play" component={Play} />
            <Route exact path="/finished" component={Finished} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
