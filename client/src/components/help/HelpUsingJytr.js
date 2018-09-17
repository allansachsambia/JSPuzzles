import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import HelpSubmenu from "./HelpSubmenu";
import Styles from "./help-using-jytr.css";

class HelpUsingJytr extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="help-using-jytr">
        <Nav for="help" />
        <div className="inner-wrap">
          <HelpSubmenu />

          <p className="help-using-jytr-section-block">
            <span className="help-using-jytr-icon-wrap">
              <i className="fa fa-tachometer" aria-hidden="true" />
            </span>
            <span className="help-using-jytr-description">
              This icon opens the dashboard which gives access to your profile
              as well as more detailed information on your current progress.
            </span>
          </p>

          <p className="help-using-jytr-section-block">
            <span className="help-using-jytr-icon-wrap">
              <i className="fa fa-floppy-o" aria-hidden="true" />
            </span>
            <span className="help-using-jytr-description">
              This option will appear if you are logged in. Clicking this will
              allow you to save your progress and come back later.
            </span>
          </p>

          <p className="help-using-jytr-section-block">
            <span className="help-using-jytr-icon-wrap">
              <i className="fa fa-flag" aria-hidden="true" />
            </span>
            <span className="help-using-jytr-description">
              The flag allows the user to cheat and just see the answer. This is
              useful if the user does not understand the question or if they are
              having a lot of difficulty in solving the problem.
            </span>
          </p>

          <p className="help-using-jytr-section-block">
            <span className="help-using-jytr-icon-wrap">
              <i className="fa fa-eraser" aria-hidden="true" />
            </span>
            <span className="help-using-jytr-description">
              Clicking the eraser resets the current question completely to it's
              original state so you can start over again.
            </span>
          </p>

          <p className="help-using-jytr-section-block">
            <span className="help-using-jytr-icon-wrap">
              <i className="fa fa-forward" aria-hidden="true" />
            </span>
            <span className="help-using-jytr-description">
              The forward button checks whether the answer you provided is
              correct or not, allowing you to move on if it is. If the answer is
              wrong or formed improperly an error will be displayed. It also
              saves your progress if you are signed in.
            </span>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HelpUsingJytr;
