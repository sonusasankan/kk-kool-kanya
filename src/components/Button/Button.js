import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

import {StyledButton} from './style';


// all states for button
const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
  CLICKED: "clicked",
  LEAVE: "leave"
};

class Button extends Component {
  constructor(props) {
    super(props);

    //default state of button will be normal
    this.state = {
      class: STATUS.NORMAL
    };
  }

  _handleClick = () => {
    this.setState({ class: STATUS.CLICKED });
    this.props.click();
  };

  //hovered stated for button
  _onMouseEnter = () => {
    this.setState({ class: STATUS.HOVERED });
  };

  
  _onMouseLeave = () => {
    this.setState({ class: STATUS.LEAVE });
  };

  /* Button component*/
  
  render() {
    const { primary, hasBorder, label, icon, isAlignRight, children, click } = this.props;
    return (
      <StyledButton
        name="button"
        hasBorder={hasBorder}
        isAlignRight={isAlignRight}
        primary={primary}
        className={classnames(icon != null ? "kk-has-icon"+" "+this.state.class : this.state.class,  this.props.styleName)}
        onClick={this._handleClick}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        <span>{label}</span>
        {icon}
        {children}
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  primary: true,
  hasBorder: false,
  label: "",
  icon: null,
  isAlignRight: false
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  hasBorder: PropTypes.bool,
  isAlignRight: PropTypes.bool,
  styleName: PropTypes.string,
  click: PropTypes.func.isRequired
};

export { Button };
