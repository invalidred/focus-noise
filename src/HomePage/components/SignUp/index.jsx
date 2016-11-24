import './style.scss';
import React, { Component } from 'react';
import { Buttons, TextInput, Headers } from '../../../Common/UI';

const { Button, SocialButton } = Buttons;
const { PrimaryHeader } = Headers;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChange(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section id="sign-up" className="container">
        <PrimaryHeader text="Signup to Focus Noise" />
        <div id="sign-up-options">
          <div className="signup-option">
            <TextInput
              className="textInput"
              name="email"
              placeholder="Please enter email"
              label="Email"
              value={this.state.email}
              onChange={this.onChange.bind(this)}
            />
            <TextInput
              className="textInput"
              name="password"
              placeholder="Please enter password"
              label="Password"
              value={this.state.password}
              onChange={this.onChange.bind(this)}
              type="password"
            />
            <Button
              name="signUp"
              text="Sign Up"
              onClick={() => {}}
            />
          </div>
          <div className="seperator">
            OR
          </div>
          <div className="signup-option signup-social">
            <SocialButton
              className="lower-case"
              name="facebook"
              text="Signup with Facebook"
              socialLetter="f"
              onClick={() => {}}
            />
            <SocialButton
              name="google"
              text="Signup with Google"
              socialLetter="g"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>
    );
  }
}
