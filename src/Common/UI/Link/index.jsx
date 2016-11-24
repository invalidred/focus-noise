import './style.scss';

import React, { Component, PropTypes } from 'react';

export default class Link extends Component {
  render() {
    return (
      <a
        className="link"
        href={this.props.url}
      >
        {this.props.text}
      </a>
    );
  }
}

Link.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
};
