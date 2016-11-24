import React, { Component, PropTypes } from 'react';

import { SecondaryHeader } from '../../../Common/UI/Headers';

export default class Benefit extends Component {
  render() {
    const { image, name, content } = this.props;
    return (
      <div className="benefit">
        <img
          src={`/src/assets/images/${image}`}
          alt={`${name} image`}
        />
        <SecondaryHeader text={name} />
        <div className="content-text space-top">
          {content}
        </div>
      </div>
    )
  }
}

Benefit.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string
}
