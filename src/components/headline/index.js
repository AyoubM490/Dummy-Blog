import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <div>
          {tempArr.map((item) => (
            <div key={item.id} data-test="tempArr">
              <h2 data-test="fName">{item.fName}</h2>
              <h2 data-test="lName">{item.lName}</h2>
              <h2 data-test="email">{item.email}</h2>
              <h2 data-test="age">{item.age}</h2>
              <h2 data-test="onlineStatus">{item.onlineStatus}</h2>
            </div>
          ))}
        </div>
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
