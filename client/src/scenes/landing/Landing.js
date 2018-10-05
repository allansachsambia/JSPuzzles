import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import LandingHero from "./LandingHero";
import LandingInfo from "./LandingInfo";
import LandingFooter from "./LandingFooter";
import landingLogo from "./../../svgs/landing-logo.svg";
import landingTitle from "./../../svgs/landing-title.svg";
import landingTrapezoid from "./../../svgs/landing-trapezoid.svg";
import landingBolt from "./../../svgs/landing-bolt.svg";
import rapunzelLight from "../../images/rapunzel-light.png";
import Styles from "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <main className="landing-main">
          <Fade>
            <img className="landing-logo" src={landingLogo} />
          </Fade>
          <Link to="/play" className="navlink">
            <img className="landing-title" src={landingTitle} />
          </Link>
          <img className="landing-trapezoid" src={landingTrapezoid} />
          <img className="landing-bolt" src={landingBolt} />
        </main>
        <LandingFooter />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
