import './style.scss';

import React, { Component, PropTypes } from 'react';

export default class SocialButton extends Component {
  render() {
    return (
      <button
        id={this.props.name}
        name={this.props.name}
        className="button social-button"
        onClick={this.props.onClick}
      >
        <div className="social-letter">
          {this.props.socialLetter}
        </div>
        <div className="social-name">
          {this.props.text}
        </div>
      </button>
    );
  }
}

SocialButton.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  socialLetter: PropTypes.string
}
