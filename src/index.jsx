import './Common/fonts.scss';
import './Common/base.scss';
import '../node_modules/normalize.css/normalize.css';

import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return(
      <HomePage />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
