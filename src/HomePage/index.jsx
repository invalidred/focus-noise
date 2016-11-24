import React, { Component } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

export default class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}
