import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledFavButton from './style';


const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
  CLICKED: "clicked",
  LEAVE: "leave"
};

const ICON = {
  ACTIVE: "icon-ic-heart-active-24",
  NORMAL: "icon-ic-heart-disable-24"
}

class FavButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: STATUS.NORMAL,
      icon: ICON.NORMAL
    };
  }

  _handleClick = () => {
    let newIcon = (this.state.icon === ICON.NORMAL ? this.state.icon = ICON.ACTIVE : this.state.icon = ICON.NORMAL)
    this.setState({
      class: STATUS.CLICKED,
      icon: newIcon
    });
  };

  _onMouseEnter = () => {
    this.setState({
      class: STATUS.HOVERED
    });
    console.log('entered');
  }
  _onMouseLeave = () => {
    this.setState({class: STATUS.LEAVE });
  }

  render(){
    const { top, right, bottom, left, grey, className } = this.props;
    return (
      <StyledFavButton
        grey={grey}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        className={"card__fav-button "+ this.state.icon +" "+this.state.class+" "+className}
        onClick={this._handleClick}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave} />
    )
  }
}

FavButton.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  grey: PropTypes.bool
};

FavButton.defaultProps = {
  top: false,
  right: false,
  bottom: false,
  left: false,
};

export default FavButton;
