import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import CloseButton from "./../../svgs/CloseButton";
import Styles from "./top.css";

export class Top extends Component {
  render() {
    const current = this.props.current === null ? 0 : this.props.current;
    return (
      <div className="top">
        <div className="top-challenge-name">
          {current + 1}. {this.props.questions[current].name}
        </div>
      </div>
    );
  }
}

Top.propTypes = {
  current: PropTypes.number,
  questions: PropTypes.array
};

function mapStateToProps({ questions, current }) {
  return { questions, current };
}

export default connect(mapStateToProps, actions)(Top);
