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
                PLAY
              </Link>
            </div>
            <div className="mini-nav-link">
              <a href={this.props.auth ? `/api/logout` : `/auth/google`}>
                {this.props.auth ? `SIGN OUT` : `SIGN IN`}
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright">
            <a href="http://allansachsambia.com">
              COPYRIGHT © 2018 ALLAN SACHS-AMBIA
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
