import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import rapunzelLight from "./../../images/rapunzel-light.png";
import Logo2 from "../../svgs/Logo2";
import Styles from "./landing-hero.css";

class LandingHero extends Component {
  render() {
    return (
      <div className="landing-hero">
        <Link to={"/play"}>
          <Logo2 />
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingHero);
