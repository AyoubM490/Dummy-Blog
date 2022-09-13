import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class SharedButton extends Component {
  constructor(props) {
    super(props);

    this.submitEvent = this.submitEvent.bind(this);
  }

  submitEvent() {
    const { emitEvent } = this.props;

    if (emitEvent) {
      emitEvent();
    }
  }

  render() {
    const { buttonText } = this.props;

    return (
      <button
        data-test="buttonComponent"
        onClick={this.submitEvent}
        type="button"
      >
        {buttonText}
      </button>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

SharedButton.defaultProps = {
  buttonText: 'Example Button Text',
  emitEvent: () => {},
};

export default SharedButton;
