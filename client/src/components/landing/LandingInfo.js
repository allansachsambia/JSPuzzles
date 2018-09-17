import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./landing-info.css";

class LandingInfo extends Component {
  render() {
    return (
      <div className="landing-info">
        <div className="info-subsection">
          <div className="info-subsection-title">40 Code Challenges!</div>
          <div>
            <i className="fa fa-bolt" aria-hidden="true" />
          </div>
          <div className="info-subsection-description">
            A code challenge game made up of forty FizzBuzzy questions.
          </div>
        </div>

        {/* <div className="info-subsection">
          <div className="info-subsection-title">Project Information</div>

          <div>
            <i className="fa fa-github-alt" aria-hidden="true" />
          </div>

          <div className="info-subsection-description">

          </div>
        </div> */}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingInfo);
