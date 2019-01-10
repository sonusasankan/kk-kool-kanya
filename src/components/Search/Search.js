import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <form className="d-flex justify-content-center">
          <label htmlFor="search" className="d-none">Type your keywords</label>
          <input
            style={{ width: '75%', height: 50 }}
            className="mx-auto"
            onFocus={this.props.onFocus}
            type={this.props.text}
            name={this.props.name}
            id="search"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
export default Search;
