import './style.scss';

import React, { Component, PropTypes } from 'react';

export default class PrimaryHeader extends Component {
  render() {
    return <header className="primary-header">{this.props.text}</header>
  }
}

PrimaryHeader.propTypes = {
  text: PropTypes.string
}
