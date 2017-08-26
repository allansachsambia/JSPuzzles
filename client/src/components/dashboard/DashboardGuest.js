import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Nav from '../Nav';
import Footer from '../Footer';
import _ from 'lodash';
import DashboardResetModal from './DashboardResetModal';
import DashboardGuestStyles from '../../styles/dashboard/dashboard-guest.css';

export class DashboardGuest extends Component {
  componentDidMount() {
    if (this.props.auth) {
      this.props.fetchCode();
    }
  }

  componentDidUpdate() {
    if (this.props.auth) {
      if (this.props.current === null && this.props.dbCode[0]) {
        this.props.setCurrent(this.props.dbCode[0].current);
      }
    }
  }

  displayDashboardResetModal() {
    document.querySelector('.dashboard-reset-modal').style.display = 'initial';
    document.querySelector('.box').style.display = 'initial';
  }

  initialSetup() {
    return this.props.questions.map(({ name }, i) => {
      if (this.props.current >= i + 1) {
        return (
          <li key={i} className="bottom-finished-question">
            {i + 1}. {name} <i className="fa fa-check" aria-hidden="true" />
          </li>
        );
      } else {
        return (
          <li key={i} className="bottom-unfinished-question">
            {i + 1}. {name}
          </li>
        );
      }
    });
  }

  dbSetup() {
    if (this.props.current !== null) {
      return this.props.questions.map(({ name }, i) => {
        if (this.props.current >= i + 1) {
          return (
            <li key={i} className="bottom-finished-question">
              {i + 1}. {name} <i className="fa fa-check" aria-hidden="true" />
            </li>
          );
        } else {
          return (
            <li key={i} className="bottom-unfinished-question">
              {i + 1}. {name}
            </li>
          );
        }
      });
    }
  }

  render() {
    const username = this.props.auth ? this.props.auth.displayName : 'Guest';
    const totalQuestions = this.props.questions.length - 1;
    const amountFinished = this.props.current || 0;
    const percentageCompleted = amountFinished / totalQuestions * 100;

    return (
      <div className="dashboard-guest">
        <Nav for="dashboard" />
        <DashboardResetModal userType="user" />
        <div className="inner-wrap">
          <div className="top-dash">
            <div className="top-dash-image-wrap">
              <i className="fa fa-user-circle" aria-hidden="true" />
            </div>
            <div className="top-dash-profile">
              <div className="top-dash-username">
                {username}
              </div>
              <div className="top-percent-finished">
                {percentageCompleted || 0}% Finished
              </div>
              <div className="button-wrap">
                <div className="top-play-button">
                  <Link to={'/play'}>
                    <button>
                      PLAY JYTR
                      <i className="fa fa-play-circle-o" aria-hidden="true" />
                    </button>
                  </Link>
                </div>
                <div className="top-reset-button">
                  <button
                    onKeyDown={this.displayDashboardResetModal}
                    className="control"
                    onClick={this.displayDashboardResetModal}
                  >
                    RESET JYTR<i className="fa fa-undo" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul className="bottom-list">
            {this.props.dbCode[0] ? this.dbSetup() : this.initialSetup()}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ auth, questions, current, dbCode }) {
  return { auth, questions, current, dbCode };
}

export default connect(mapStateToProps, actions)(DashboardGuest);
