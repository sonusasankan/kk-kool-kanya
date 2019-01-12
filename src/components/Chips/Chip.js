import React, { Component } from "react";

import { PropTypes } from "prop-types";
import { colors } from "../../themes";
import styled from "styled-components";
import $ from "jquery";

const Btn = styled.button`
  background-color:${props => (props.isActive? "#703db2": "#efefef")};
  color:${props => (props.isActive ? "#fff":"#4f565e")};
  font-size: 18px !important;
  border-radius: 30px !important;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: none !important;
  outline: 0;
  &.clicked{  
      background: ${colors.primary};
      color: #fff;
  }
  @media (min-width: 700px) {
    margin-right: 15px;
    padding-right: 20px !important;
  }
`;

const STATUS = {
  NORMAL: "normal",
  CLICKED: "clicked"
};

class Chip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: STATUS.NORMAL,
      isActive: false
    };
  }

  _handleClick = () => {
    if(this.state.class === 'normal'){
      this.setState({ 
        class: STATUS.CLICKED,
        selected: this.props.title,
        isActive: true
      });
    }else{
      this.setState({ class: STATUS.NORMAL, isActive: false});
    }
  };

close = (e) => {
  $(e.target).closest('.kk-chips').remove()
}
  render() {
    return (
      <Btn isActive={this.props.isActive} className={"btn kk-chips " + this.state.class} onClick={this._handleClick}>
        <span className="mr-2">
          <img src={this.props.logo} alt={this.props.alt} />
        </span>
        {this.props.title}
        <span className="ml-2 kk-chip-close" onClick={this.close}>{this.props.close}</span>
      </Btn>
    );
  }
}



Chip.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  isActive: PropTypes.bool,
  class: PropTypes.string,
  close: PropTypes.string
};

export default Chip;
