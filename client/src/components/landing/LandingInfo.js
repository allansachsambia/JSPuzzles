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
            Jytr is a JavaScript code challenge game made up of forty questions
            in total cut from the same cloth as FizzBuzz.
          </div>
        </div>

        <div className="info-subsection">
          <div className="info-subsection-title">Project Details</div>

          <div>
            <i className="fa fa-github-alt" aria-hidden="true" />
          </div>

          <div className="info-subsection-description">
            For more information on the current state of this project, it&apos;s
            issues, to make recommendations or to help, check out the&nbsp;
            <a href="https://github.com/allansachsambia/jytr">github repo</a>.
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingInfo);
