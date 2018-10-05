import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CloseButton from "./../../svgs/CloseButton";
import * as actions from "../../actions";
import Codemirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
import Styles from "./popup.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    const popup = document.querySelector(".popup");
    popup.style.display = "none";
  }

  render() {
    const solutions = this.props.solutions;
    const current = this.props.current || 0;

    return (
      <div className="popup">
        <div className="popup-inner-wrap">
          <div
            className="popup-close-button-wrapper"
            role="button"
            onKeyDown={this.closePopup}
            onClick={this.closePopup}
          >
            <CloseButton />
          </div>

          <div className="popup-title">Answer</div>
          <hr />
          <pre className="popup-answer">
            {solutions[current].solution}
          </pre>
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

export default connect(mapStateToProps, actions)(Popup);
