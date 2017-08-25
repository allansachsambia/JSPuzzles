import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import Logo from '../svgs/Logo';
import GuestIcon from '../svgs/GuestIcon';
import DashboardNavStyles from './../styles/nav.css';

const timeouts = [];

class Nav extends Component {
  toggleFixedMobileNav() {
    const nav = document.querySelector('.nav').style;
    const dimmerStyle = document.querySelector('.mobile-dimmer-modal').style;
    const listWrapStyle = document.querySelector('.mobile-list-modal').style;
    const lis = document.querySelectorAll('.mobile-list-modal li');

    if (window.innerWidth <= 700) {
      if (dimmerStyle.opacity === '0.8') {
        nav.position = 'initial';
        dimmerStyle.top = '-10rem';
        dimmerStyle.height = '1vh';
        dimmerStyle.opacity = '0';
        listWrapStyle.display = 'none';
        lis.forEach(li => {
          li.style.color = 'transparent';
          li.style.height = '0rem';
          li.style.padding = '0rem';
        });
      } else {
        nav.position = 'fixed';
        dimmerStyle.top = '8rem';
        dimmerStyle.height = '100vh';
        dimmerStyle.opacity = '0.8';
        listWrapStyle.display = 'initial';
        lis.forEach(li => {
          li.style.color = '#ffffff';
          li.style.height = 'initial';
          li.style.padding = '1.5rem';
        });
      }

      const landingNav = document.querySelector('.nav.landing');
      if (landingNav) {
        if (dimmerStyle.opacity === '0.8') {
          landingNav.style.background = '#008aff';
        } else {
          landingNav.style.background = 'transparent';
        }
      }
    }
  }

  renderIcon() {
    if (this.props.auth) {
      if (this.props.auth) {
        const name = this.props.auth.displayName || 'guest';
        return (
          // <div className="identicon-wrap">
          //   <div />
          // </div>
          <div className="guest-fa-wrap">
            <i className="fa fa-user-circle" aria-hidden="true" />
          </div>
        );
      } else {
        return <div />;
      }
    } else {
      return (
        <div className="guest-fa-wrap">
          <i className="fa fa-user-circle" aria-hidden="true" />
        </div>
      );
    }

    if (this.props.auth) {
      const name = this.props.auth.displayName || 'guest';
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
    const authLink = this.props.auth
      ? ['/auth/google', 'Sign in']
      : ['/api/logout', 'Sign out'];

    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) {
        document.querySelector('.mobile-list-modal').style.display = 'none';
        document.querySelector('.mobile-list-modal').style.display = 'none';
        document.querySelector('.nav').style.position = 'initial';
        document.querySelector('.mobile-dimmer-modal').style.height = '1vh';
        document.querySelector('.mobile-dimmer-modal').style.opacity = '0';
      }
    });

    console.log(this.props.auth);

    return (
      <nav className={`nav ${this.props.for}`}>
        <div className="left-side">
          <div className="branding">
            <Link to={this.props.auth ? '/' : '/'}>
              <Logo />
            </Link>
          </div>
          <Link to={'/play'}>
            <div className="left-side-option play-option">PLAY</div>
          </Link>
          <Link to={'/dashboard'}>
            <div className="left-side-option dashboard-option">DASHBOARD</div>
          </Link>
          <Link to={'/help'}>
            <div className="left-side-option help-option">HELP</div>
          </Link>
        </div>

        <div className="right-side">
          <div className="options">
            <div
              className="dropdown-header"
              onClick={this.toggleFixedMobileNav}
              onKeyDown={this.toggleFixedMobileNav}
              role="button"
              tabIndex="0"
            >
              {this.renderIcon()}
              <span className="guest-text">
                {this.props.auth ? this.props.auth.displayName : 'Guest'}
              </span>
            </div>
            <ul className="options-list">
              <li>
                <Link to={'/play'}>Play</Link>
              </li>
              <li>
                <a href={this.props.auth ? `/api/logout` : `/auth/google`}>
                  {this.props.auth ? `Sign out` : `Sign in`}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mobile-dimmer-modal"
          onClick={this.toggleFixedMobileNav}
          onKeyDown={this.toggleFixedMobileNav}
          role="button"
          tabIndex="0"
        />
        <div className="mobile-list-modal">
          <ul>
            <Link to={'/play'}>
              <li className="list">Play</li>
            </Link>
            <Link to={'/dashboard'}>
              <li className="list">Dashboard</li>
            </Link>
            <Link to={'/help'}>
              <li className="list">Help</li>
            </Link>
            <a href={this.props.auth ? `/api/logout` : `/auth/google`}>
              <li className="list">
                {this.props.auth ? `Sign out` : `Sign in`}
              </li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Nav);
