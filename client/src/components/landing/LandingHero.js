import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import rapunzelLight from './../../images/rapunzel-light.png';
import LandingHeroStyles from './../../styles/landing/landing-hero.css';

class LandingHero extends Component {
  render() {
    return (
      <div className="landing-hero">
        <img src={rapunzelLight} alt="main logo" />
        <Link to={'/play'}>
          <button>
            PLAY <i className="fa fa-play-circle-o" aria-hidden="true" />
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingHero);
