import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./landing-info.css";

class LandingInfo extends Component {
  render() {
    return (
      <div className="landing-info">
        <i className="fa fa-bolt" aria-hidden="true" />
        <Link to="/play" className="navlink">
          PLAY
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingInfo);
