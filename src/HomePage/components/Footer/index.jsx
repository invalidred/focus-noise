import './style.scss';

import React, { Component } from 'react';

import Logo from '../Logo';
import { Headers, Link, TextInput, Buttons } from '../../../Common/UI';

const { FooterHeader } = Headers;
const { Button } = Buttons;

const links = [
  { text: 'Links', url: '#' },
  { text: 'Tutorials', url: '#' },
  { text: 'Benefits', url: '#' },
  { text: 'About', url: '#' },
  { text: 'Design', url: '#' }
];

const socialLinks = [
  { text: 'Facebook', url: '#' },
  { text: 'Google', url: '#' },
  { text: 'twitter', url: '#' }
]

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }
  render() {
    return (
      <footer id="footer" className="container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="links">
          <FooterHeader text="Useful Links" />
          <ul>
            {
              links.map(link =>
                <li key={link.text}>
                  <Link text={link.text} url={link.url} />
                </li>
              )
            }
          </ul>
        </div>
        <div className="links">
          <FooterHeader text="Follow Us" />
          <ul>
            {
              socialLinks.map(link =>
                <li key={link.text}>
                  <Link text={link.text} url={link.url} />
                </li>
              )
            }
          </ul>
        </div>
        <div className="subscribe">
          <FooterHeader text="Subscribe" />
          <TextInput
            name="email"
            value={this.state.email}
            onChange={(name, value) => this.setState(name, value)}
            placeholder="email"
            label="Email"
          />
          <Button
            name="subsribeButton"
            text="subscribe"
            onClick={() => {}}
            theme="dark"
          />
        </div>
      </footer>
    );
  }
}
