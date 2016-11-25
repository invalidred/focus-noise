import './style';

import React, { Component } from 'react';

import { PrimaryHeader } from '../../../Common/UI/Headers';
import Feature from './feature.jsx';

const features = [
  {
    name: 'Pomodoro Time Management',
    image: require('../../../../static/images/clocks.jpg'),
    content: 'For many people, time is an enemy. We race against the clock to finish assignments and meet deadlines. The Pomodoro Technique teaches you to work with time, instead of struggling against it. A revolutionary time management system, it is at once deceptively simple to learn and life-changing to use.'
  },
  {
    name: 'White Noise Generator',
    image: require('../../../../static/images/whiteNoise.jpg'),
    content: 'For many people, time is an enemy. We race against the clock to finish assignments and meet deadlines. The Pomodoro Technique teaches you to work with time, instead of struggling against it. A revolutionary time management system, it is at once deceptively simple to learn and life-changing to use.'
  },
  {
    name: 'Goal Setting And Tracking',
    image: require('../../../../static/images/goal.jpg'),
    content: 'For many people, time is an enemy. We race against the clock to finish assignments and meet deadlines. The Pomodoro Technique teaches you to work with time, instead of struggling against it. A revolutionary time management system, it is at once deceptively simple to learn and life-changing to use.'
  }
];

export default class Features extends Component {

  render() {
    return (
      <div id="features" className="container">
        <PrimaryHeader text="Focus Noise Features" />
        <div id="feature-items">
          {features.map(feature => <Feature
            key={feature.name}
            {...feature} />
          )}
        </div>
      </div>
    );
  }
}
