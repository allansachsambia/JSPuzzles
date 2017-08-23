import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LandingMain from './landing/LandingMain';
import PlayAsUser from './play/PlayAsUser';
import PlayAsGuest from './play/PlayAsGuest';
import HelpCheatSheet from './help/HelpCheatSheet';
import HelpUsingJytr from './help/HelpUsingJytr';
import FinishedMain from './finished/FinishedMain';
import DashboardGuest from './dashboard/DashboardGuest';
import DashboardUser from './dashboard/DashboardUser';
import AppStyles from './../styles/app.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  redirect = () => {
    return <Redirect to="/" />;
  };

  renderRootRoute() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Route exact path="/" component={LandingMain} />;
      default:
        return <Route exact path="/" component={DashboardUser} />;
    }
  }

  renderDashboardRoute() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Route exact path="/dashboard" component={DashboardGuest} />;
      default:
        return <Route exact path="/dashboard" component={DashboardUser} />;
    }
  }

  renderPlayRoute() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Route exact path="/play" component={PlayAsGuest} />;
      default:
        return <Route exact path="/play" component={PlayAsUser} />;
    }
  }

  renderProtectedRoute(path, component) {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Route exact path={path} component={this.MyRedirectComponent} />;
      default:
        return <Route exact path={path} component={component} />;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {this.renderRootRoute()}
            {this.renderProtectedRoute('/dashboard-user', DashboardUser)}
            {this.renderDashboardRoute()}
            {this.renderPlayRoute()}
            <Route exact path="/cheat-sheet" component={HelpCheatSheet} />
            <Route exact path="/help" component={HelpUsingJytr} />
            <Route exact path="/finished" component={FinishedMain} />
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
