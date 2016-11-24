import './style.scss';

import React, { Component } from 'react';
import { Headers } from '../../../Common/UI';

const { PrimaryHeader } = Headers;

import Benefit from './benefit';

const benefits = [
  {
    name: 'Boost Productivity',
    image: 'productivity.jpg',
    content: 'Since you go in with a mindset of gettting the work done, looking at the clock will help you boost productivity.'
  },
  {
    name: 'Avoid Distractions',
    image: 'distractions.jpg',
    content: 'Since you go in with a mindset of gettting the work done, looking at the clock will help you boost productivity.'
  },
  {
    name: 'Enhance Focus',
    image: 'focus.jpg',
    content: 'The combination of avoiding environmental distraction and paying attention to your work enhances focus'
  },
  {
    name: 'Work Life Balance',
    image: 'balance.jpg',
    content: 'Since you go in with a mindset of gettting the work done, looking at the clock will help you boost productivity.'
  }
];

export default class Benefits extends Component {
  render() {
    return (
      <section id="benefits-container" className="container">
        <PrimaryHeader text="Focus Noise Benefits" />
        <div id="benefits">
          <div>
            <Benefit {...benefits[0]} />
            <Benefit {...benefits[1]} />
          </div>
          <div>
            <Benefit {...benefits[2]} />
            <Benefit {...benefits[3]} />
          </div>
        </div>
      </section>
    );
  }
}
