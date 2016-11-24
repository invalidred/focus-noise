import './style.scss';

import React, { Component, PropTypes } from 'react';

export default class SecondaryHeader extends Component {
  render() {
    return <header className="secondary-header">{this.props.text}</header>
  }
}

SecondaryHeader.propTypes = {
  text: PropTypes.string
}
