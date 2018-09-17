import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GithubLogo from "../svgs/GithubLogo";
import Styles from "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="top">
          <div className="mini-nav">
            <div className="mini-nav-link">
              <Link to="/play" className="navlink">
                Play
              </Link>
            </div>
            <div className="mini-nav-link">
              <Link to="/Help" className="general-footer-navlink">
                Help
              </Link>
            </div>
            <div className="mini-nav-link">
              <a href={this.props.auth ? `/api/logout` : `/auth/google`}>
                {this.props.auth ? `Sign out` : `Sign in`}
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="social-media">
            <div>
              <a href="https://github.com/allansachsambia/jytr">
                <i className="fa fa-github-alt" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="copyright">
            <a href="http://allansachsambia.com">
              Copyright © 2017 Allan Sachs-Ambia
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Footer);
