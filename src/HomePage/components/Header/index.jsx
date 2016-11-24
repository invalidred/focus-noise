import './style.scss';

import React, { Component } from 'react';

import Logo from '../Logo';

export default class Header extends Component {
  render() {
    return(
      <header id="banner">
        <Logo className="logo"/>
      </header>
    )
  }
}