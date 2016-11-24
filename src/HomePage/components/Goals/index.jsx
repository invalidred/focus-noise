import './style.scss';

import React, { Component } from 'react';
import { PrimaryHeader } from '../../../Common/UI/Headers';

export default class Goals extends Component {
  render() {
    return (
      <div id="goals" className="container">
        <PrimaryHeader text="Focus Noise Goals" />
        <div className="video">
          <iframe src="https://www.youtube.com/embed/bEwOCfv6Ucg" />
        </div>
      </div>
    );
  }
}
