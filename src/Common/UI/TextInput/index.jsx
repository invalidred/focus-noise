import './style.scss';
import React, { Component, PropTypes } from 'react';

export default class TextInput extends Component {
  render() {
    return (
      <div className={`text-input ${this.props.className || ''}`}>
        <label htmlFor={this.props.name}> {this.props.label} </label>
        <input
          name={this.props.name}
          id={this.props.name}
          type={`${this.props.type || 'text' }`}
          value={this.props.value}
          onChange={(event) => this.props.onChange(
            this.props.name, event.target.value
          )}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string
}