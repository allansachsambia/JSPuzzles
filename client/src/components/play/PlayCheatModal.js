import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CloseButton from './../../svgs/CloseButton';
import PlayCheatModalStyles from './../../styles/play/play-cheat-modal.css';
import * as actions from '../../actions';
import Logo from './../../svgs/Logo';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neo.css';

class PlayCheatModal extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.displayTheAnswer = this.displayTheAnswer.bind(this);
  }

  closeModal() {
    const modal = document.querySelector('.play-cheat-modal');
    const modalBox = document.querySelector('.box');
    const querySection = document.querySelector('.query-section').style;
    const answerSection = document.querySelector('.answer-section').style;
    answerSection.display = 'none';
    querySection.display = 'initial';
    modal.style.display = 'none';
    modalBox.style.display = 'none';
  }

  displayTheAnswer() {
    const querySection = document.querySelector('.query-section').style;
    querySection.display = 'none';
    const answerSection = document.querySelector('.answer-section').style;
    answerSection.display = 'initial';
  }

  render() {
    const solutions = this.props.solutions;
    const current = this.props.current || 0;

    return (
      <div
        className="play-cheat-modal"
        role="button"
        tabIndex={0}
        onKeyDown={this.closeModal}
        onClick={this.closeModal}
      >
        <div
          className="box"
          role="button"
          tabIndex={0}
          onKeyDown={e => e.stopPropagation()}
          onClick={e => e.stopPropagation()}
        >
          <div
            className="close-button-wrapper"
            role="button"
            tabIndex={0}
            onKeyDown={this.closeModal}
            onClick={this.closeModal}
          >
            <CloseButton />
          </div>

          <div className="query-section">
            <div className="logo-wrapper">
              <Logo />
            </div>
            <div className="warning-wrapper">
              Are you sure you want to cheat and view the answer to the
              question?
            </div>
            <div className="button-wrapper">
              <button
                type="button"
                tabIndex={0}
                onKeyDown={this.displayTheAnswer}
                onClick={this.displayTheAnswer}
              >
                GIVE ME THE ANSWER!!
              </button>
            </div>
          </div>

          <div className="answer-section">
            <div className="answer-section-header">Answer</div>
            <pre>
              {solutions[current].solution}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({
  solutions,
  questions,
  googleData,
  answers,
  code,
  error,
  current,
  dbCode
}) {
  return {
    solutions,
    questions,
    googleData,
    answers,
    code,
    error,
    current,
    dbCode
  };
}

export default connect(mapStateToProps, actions)(PlayCheatModal);
