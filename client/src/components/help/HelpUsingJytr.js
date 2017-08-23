import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import HelpUsingJytrStyles from './../../styles/help/help-using-jytr.css';

class HelpUsingJytr extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="help-using-jytr">
        <Nav for="help" />
        <div className="inner-wrap">
          <ul className="menu">
            <li className="this">
              <Link to={'/help'}>USING JYTR</Link>
            </li>
            <li>
              <Link to={'/cheat-sheet'}>CHEAT SHEET</Link>
            </li>
          </ul>

          <p className="help-section">
            <i className="fa fa-tachometer" aria-hidden="true" />
            The dashboard icon opens the dashboard. This gives access to your
            profile as well as more detailed information on your current
            progress.
          </p>

          <p className="help-section">
            <i className="fa fa-flag" aria-hidden="true" />
            The flag icon allows the user to cheat and just see the answer. This
            is useful if the user does not understand the question or if they
            are having a lot of difficulty in solving the problem.
          </p>

          <p className="help-section">
            <i className="fa fa-eraser" aria-hidden="true" />
            The eraser icon is like the bomb icon but not for the whole
            application, only the specific question the user is working on. In
            other words, it allows you to reset the current question completely,
            but not the whole application.
          </p>

          <p className="help-section">
            <i className="fa fa-forward" aria-hidden="true" />
            The forward icon will allow you to check whether the answer you
            provided is correct or not and subsequently allow you to move on if
            it is. If the answer is wrong or formed improperly an error will be
            displayed.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HelpUsingJytr;
