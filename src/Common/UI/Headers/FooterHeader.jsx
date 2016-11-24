import './style.scss';

import React, { Component, PropTypes } from 'react';

export default class FooterHeader extends Component {
  render() {
    return <header className="footer-header">{this.props.text}</header>
  }
}

FooterHeader.propTypes = {
  text: PropTypes.string
}
