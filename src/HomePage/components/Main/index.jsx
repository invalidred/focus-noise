import React, { Component } from 'react';
import Goals from '../Goals';
import Features from '../Features';
import Benefits from '../Benefits';
import SignUp from '../SignUp';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Goals />
        <Features />
        <Benefits />
        <SignUp />
      </main>
    );
  }
}
