import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import MyRedirectComponent from './MyRedirectComponent';
import My404Component from './My404Component';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  protectedRoute(path, component) {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Route exact path={path} component={MyRedirectComponent} />;
      default:
        return <Route exact path={path} component={component} />;
    }
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              {this.protectedRoute('/dashboard', Dashboard)}
              <Route component={My404Component} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
