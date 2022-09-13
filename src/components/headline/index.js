import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Headline extends Component {
  render() {
    const { header, desc, tempArr } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header" className="header">
          {header}
        </h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    }),
  ),
};

Headline.defaultProps = {
  header: '',
  desc: '',
  tempArr: [],
};

export default Headline;
