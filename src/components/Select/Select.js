import React, { Component } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  change = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
        <Select
          placeholder={item}
          name={item}
          style={{ width: 100 }}
          value={selected}
          isClearable={true}
          isSearchable={true}
          onChange={this.handleChange}
          options={this.state.options[item]}
        />
    );
  }
}

Select.propTypes = {
  value: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
export default Select;
