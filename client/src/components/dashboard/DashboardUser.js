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
import DashboardUserStyles from '../../styles/dashboard/dashboard-user.css';

export class DashboardUser extends Component {
  componentDidMount() {
    this.props.fetchCode();
  }

  componentDidUpdate() {
    if (this.props.current === null && this.props.dbCode[0]) {
      this.props.setCurrent(this.props.dbCode[0].current);
    }
  }

  displayDashboardResetModal() {
    const modal = document.querySelector('.dashboard-reset-modal');
    const modalBox = document.querySelector('.box');
    modal.style.display = 'initial';
    modalBox.style.display = 'initial';
  }

  initialSetup() {
    return this.props.questions.map(({ name }, i) => {
      return (
        <li key={i} className="bottom-unfinished-question">
          {i + 1}. {name}
        </li>
      );
    });
  }

  renderImage() {
    if (this.props.auth) {
      const name = this.props.auth.displayName || 'guest';
      return (
        <div className="profile-identicon-wrap">
          <div />
        </div>
      );
    } else {
      return <div />;
    }
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
    const username = this.props.auth ? this.props.auth.displayName : '';
    const totalQuestions = this.props.questions.length - 1;
    const amountFinished = this.props.dbCode[0]
      ? this.props.dbCode[0].current
      : 0;
    const percentageCompleted = amountFinished / totalQuestions * 100;

    return (
      <div className="dashboard-user">
        <Nav username={username} path={'dashboard'} for="dashboard" />
        <DashboardResetModal userType="user" />
        <div className="inner-wrap">
          <div className="top-dash">
            <div className="top-dash-image-wrap">
              {this.renderImage()}
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

function mapStateToProps({
  auth,
  questions,
  answers,
  code,
  error,
  current,
  dbCode
}) {
  return {
    auth,
    questions,
    answers,
    code,
    error,
    current,
    dbCode
  };
}

export default connect(mapStateToProps, actions)(DashboardUser);
