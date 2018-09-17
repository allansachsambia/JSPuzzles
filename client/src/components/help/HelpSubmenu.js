import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./help-submenu.css";

class HelpSubmenu extends Component {
  render() {
    return (
      <ul className="help-submenu">
        <a name="table-of-contents">
          {""}
        </a>
        <li>
          <Link to={"/help"}>USING JYTR</Link>
        </li>
        <li className="this">
          <Link to={"/cheat-sheet"}>CHEAT SHEET</Link>
        </li>
      </ul>
    );
  }
}

export default HelpSubmenu;
