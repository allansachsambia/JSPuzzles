import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import LandingHero from "./LandingHero";
import LandingInfo from "./LandingInfo";
import Footer from "../Footer";
import rapunzelLight from "../../images/rapunzel-light.png";
import Styles from "./landing-main.css";

class LandingMain extends Component {
  render() {
    return (
      <div className="landing-main">
        <Nav for="landing" />
        <LandingHero />
        <LandingInfo />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LandingMain);
