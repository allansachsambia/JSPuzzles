import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Nav from '../Nav';
import Footer from '../Footer';
import HelpCheatSheetStyles from '../../styles/help/help-cheat-sheet.css';

class HelpCheatSheet extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const tableOfContentsListItemsBlock = this.props.solutions.map(
      (solution, i) =>
        <li key={solution.name}>
          {`${i + 1}. `}
          <a href={`#${solution.name}`}>{`${solution.name.toUpperCase()}`}</a>
        </li>
    );
    const solutionsBlock = this.props.solutions.map((solution, i) =>
      <div key={solution.name} className="cheatsheet-solutions-block">
        <a name={solution.name} className="anchor">
          {''}
        </a>
        <h5 className="solution-title">{`${i + 1}: ${solution.name}`}</h5>
        <pre className="solution-section">
          {solution.solution}
        </pre>

        <a href="#table-of-contents">
          <div className="back-to-the-top-wrap">
            <span className="back-to-the-top">
              Back to the top
              <i className="fa fa-hand-o-up" aria-hidden="true" />
            </span>
          </div>
        </a>
      </div>
    );

    return (
      <div className="help-cheat-sheet">
        <Nav for="help" />
        <div className="inner-wrap">
          <ul className="menu">
            <a name="table-of-contents">
              {''}
            </a>
            <li>
              <Link to={'/help'}>USING JYTR</Link>
            </li>
            <li className="this">
              <Link to={'/cheat-sheet'}>CHEAT SHEET</Link>
            </li>
          </ul>

          <div className="description">
            <div className="table-of-contents">
              <h5>Table of Contents</h5>
              <ul className="contents-list">
                {tableOfContentsListItemsBlock}
              </ul>
            </div>

            <div>
              {solutionsBlock}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

HelpCheatSheet.propTypes = {
  solutions: PropTypes.array
};

function mapStateToProps({ solutions }) {
  return { solutions };
}

export default connect(mapStateToProps, actions)(HelpCheatSheet);
