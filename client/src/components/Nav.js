import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import Logo2 from "../svgs/Logo2";
import Styles from "./nav.css";

const timeouts = [];

class Nav extends Component {
  toggleFixedMobileNav() {
    const nav = document.querySelector(".nav").style;
    const dimmerStyle = document.querySelector(".mobile-dimmer-modal").style;
    const listWrapStyle = document.querySelector(".mobile-list-modal").style;
    const lis = document.querySelectorAll(".mobile-list-modal li");

    if (window.innerWidth <= 700) {
      if (dimmerStyle.opacity === "0.8") {
        nav.position = "initial";
        dimmerStyle.top = "-10rem";
        dimmerStyle.height = "1vh";
        dimmerStyle.opacity = "0";
        listWrapStyle.display = "none";
        lis.forEach(li => {
          li.style.color = "transparent";
          li.style.height = "0rem";
          li.style.padding = "0rem";
        });
      } else {
        nav.position = "fixed";
        dimmerStyle.top = "8rem";
        dimmerStyle.height = "100vh";
        dimmerStyle.opacity = "0.8";
        listWrapStyle.display = "initial";
        lis.forEach(li => {
          li.style.color = "#ffffff";
          li.style.height = "initial";
          li.style.padding = "1.5rem";
        });
      }
    }
  }

  renderIcon() {
    if (this.props.auth) {
      if (this.props.auth) {
        const name = this.props.auth.displayName || "guest";
        return (
          <div className="guest-fa-wrap">
            <i className="fa fa-user-o" aria-hidden="true" />
          </div>
        );
      } else {
        return <div />;
      }
    } else {
      return (
        <div className="guest-fa-wrap">
          <i className="fa fa-user-o" aria-hidden="true" />
        </div>
      );
    }

    if (this.props.auth) {
      const name = this.props.auth.displayName || "guest";
      if (this.props.auth) {
        return (
          <div className="identicon-wrap">
            <div />
          </div>
        );
      } else {
        return <div>Ok There</div>;
      }
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <nav className={`nav nav-${this.props.for}`}>
        <div className="left-side">
          <Link to={"/play"}>
            <div className="left-side-option play-option">PLAY</div>
          </Link>
          <Link to={"/help"}>
            <div className="left-side-option help-option">HELP</div>
          </Link>
          <Link to={"/cheat-sheet"}>
            <div className="left-side-option help-option">CHEAT</div>
          </Link>
        </div>

        <div className="right-side">
          <Link to={"/dashboard"}>
            <div className="nav-image-wrap">
              <img src="https://jytr-fullstack.herokuapp.com/splash.png" />
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Nav);
