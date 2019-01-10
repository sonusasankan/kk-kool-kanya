import React, { Component } from "react";
import { PropTypes } from "prop-types";


/*data coming from global context*/
import { Context, allJobs } from "../../../Context";

import SearchIcon from "../../../assets/images/ic-search-line.svg";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null,
      categorySelected: "companies",
      jobs: allJobs,
      options: [],
      values: {
        company: null,
        location: null,
        industry: null,
        position: null
      }
    };
  }

  /*creating options for select menu, options dynamically generating from context*/
  componentDidMount() {
    const { jobs } = this.state;

    let options = {};
    jobs.forEach(job => {
      Object.keys(job).forEach(key => {
        options[key] = [
          ...(options[key]
            ? options[key].filter(o => o.label !== job[key])
            : []),
          ...[{ value: job[key], label: job[key] }]
        ];
      });
    });

    this.setState({ options });
  }

  /*select value changing function and creating new values in state to use search results page*/
  handleChange = (param, optionSelected) => {
    let temp = this.state.values;
    let i = param.target.name;
    temp[i] = param.target.label;
    console.log(param);
    this.setState({
      optionSelected,
      values: temp
    });
  };

  /*toggling the search categories*/
  toggleCategory = e => {
    this.setState({
      categorySelected: e.target.value,
      optionSelected: null
    });
  };

  /*rendering different select components according to switch case*/

  render() {
    const { categorySelected } = this.state;
    const { components, placeholder, id} = this.props;
    return (
      <Context.Consumer>
        {value => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <div className="d-flex">
              {components.map(component => {
                return(
                  <div className="form-group" check>
                  <div className="custom-control custom-radio kk-search-radio">
                    <input
                      name={component}
                      id={component}
                      type="radio"
                      checked="true"
                      value={component}
                      checked={categorySelected === component }
                      onChange={this.toggleCategory}
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor={component}>
                    {component}
                    </label>
                  </div>
                </div>
                )
              })}
              </div>
              <div />
              <div className="kk-search-input">
               <label htmlFor={id} className="d-none"></label>
                <input id={id} placeholder={placeholder} />
                <button name="search button" aria-label="Search button" role="button" className="kk-search-button-icon">
                  <img src={SearchIcon} alt="alt text" />
                </button>
              </div>
            </form>
          );
        }}
      </Context.Consumer>
    );
  }
}
SearchContainer.defaultProps = {
  components: []
}
SearchContainer.propTypes = {
  components: PropTypes.array,
  placeholder: PropTypes.string.isRequired
};

export default SearchContainer;
