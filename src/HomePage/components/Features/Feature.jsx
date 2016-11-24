import React, { Component, PropTypes } from 'react';

import { SecondaryHeader } from '../../../Common/UI/Headers';

export default class Feature extends Component {
  render() {
    const { image, name, content } = this.props;
    return (
      <div className="feature">
        <div className="feature-image">
          <img
            src={`/src/assets/images/${image}`}
            alt={`${name} image`}
          />
        </div>
        <div className="feature-detail">
          <SecondaryHeader text={name} />
          <div className="content-text space-top">
            {content}
          </div>
        </div>
      </div>
    )
  }
}

Feature.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string
}
