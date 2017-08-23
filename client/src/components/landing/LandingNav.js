import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from './../../svgs/Logo';
import GuestIcon from './../../svgs/GuestIcon';
import LandingNavStyles from './../../styles/landing/landing-nav.css';

const timeouts = [];

class LandingNav extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelect(e) {
    timeouts.forEach(timeout => {
      clearTimeout(timeout);
    });
    document.querySelector('.options-list').style.display = 'initial';
  }

  handleDeselect(e) {
    timeouts.forEach(timeout => {
      clearTimeout(timeout);
    });
    timeouts.push(
      setTimeout(() => {
        document.querySelector('.options-list').style.display = 'none';
      }, 500)
    );
  }

  render() {
    return (
      <nav className="landing-nav">
        <div className="left-side">
          <div className="branding">
            <Link to={this.props.auth ? '/' : '/'}>
              <Logo />
            </Link>
          </div>
        </div>

        <div className="right-side">
          <div
            className="options"
            onMouseEnter={this.handleSelect}
            onFocus={this.handleSelect}
            onMouseLeave={this.handleDeselect}
            onBlur={this.handleDeselect}
          >
            <div className="dropdown-header">
              <img
                className="guest-icon"
                src="https://lh3.googleusercontent.com/-KfImYzTEz5c/AAAAAAAAAAI/AAAAAAAAAAA/CFxb4Cu2cmk/112552520027031641657.jpg?sz=200"
                alt="profile"
              />
              <span className="guest-text">Guest</span>
            </div>
            <ul className="options-list">
              <li>
                <Link to={'/play'}>Play</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <a href="/auth/google">Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingNav);
