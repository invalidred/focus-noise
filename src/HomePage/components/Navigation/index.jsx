import './style.scss';
import React, { Component } from 'react';

import { Link } from '../../../Common/UI';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.links = [ 'Features', 'Benefits', 'Tutorials', 'About Us', 'Log In' ];
  }

  render() {
    return (
      <nav>
        <ul>
          { this.links.map(link =>
              <li key={link}>
                <Link url="#" text={link} />
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}
