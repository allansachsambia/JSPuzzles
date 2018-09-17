import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CloseButton from "./../../svgs/CloseButton";
import * as actions from "../../actions";
import Logo from "./../../svgs/Logo";
import Styles from "./dashboard-reset-modal.css";

class DashboardResetModal extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.resetWholeApp = this.resetWholeApp.bind(this);
  }

  closeModal() {
    const modal = document.querySelector(".dashboard-reset-modal");
    const modalBox = document.querySelector(".box");
    modal.style.display = "none";
    modalBox.style.display = "none";
  }

  resetWholeApp() {
    if (this.props.userType === "user") {
      this.props.updateCode({ code: this.props.questions, current: 0 });
    }

    this.props.setCurrent(0);
    this.props.setError("");
    this.props.setAnswers(this.props.questions);
    this.props.setCode(this.props.questions[0].code);

    this.closeModal();
  }

  render() {
    return (
      <div
        className="dashboard-reset-modal"
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

          <div className="logo-wrapper">
            <Logo />
          </div>

          <div className="warning-wrapper">
            Are you sure you want to reset the whole challenge? This means you
            will have to start all over from the beginning.
          </div>

          <div className="button-wrapper">
            <button
              type="button"
              tabIndex={0}
              onKeyDown={this.resetWholeApp}
              onClick={this.resetWholeApp}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, answers, code, error, current, dbCode }) {
  return {
    questions,
    answers,
    code,
    error,
    current,
    dbCode
  };
}

export default connect(mapStateToProps, actions)(DashboardResetModal);
