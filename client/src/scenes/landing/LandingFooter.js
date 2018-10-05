import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./landing-footer.css";

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-horizontal-rules">
        {" "}<hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div className="landing-footer-actual">Copyright © 2018.</div>
    </footer>
  );
}

export default Footer;
