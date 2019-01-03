import React, { Component } from "react";
import PropTypes from 'prop-types'

// import "./Input.scss";

class Input extends Component {
  state = {
    name: null
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <input
        name="name"
        type="text"
        placeholder={this.props.label}
        value={this.state.value}
        onChange={this.props.onChange}
        className={this.props.className}
      />
    );
  }
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
export default Input;
