import './style.scss';

import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button
        id={this.props.name}
        name={this.props.name}
        className="button"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}