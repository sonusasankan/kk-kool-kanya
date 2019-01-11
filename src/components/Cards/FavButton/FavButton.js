import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledFavButton from './style';

import {IcHeart24, IcHeartLiked24} from '../../IconSet';


class FavButton extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);

    this.state = {
      isFav: false,
    };
  }

  _handleClick = (event) => {
    event.preventDefault();
    let newfavState = !this.state.isFav;
    this.setState({
      isFav: newfavState,
    });
  };


  componentDidMount(){
    this.setState({
      isFav: this.props.isFav
    })
  }

  render(){
    const {isFav, className, top, right, bottom, left, active } = this.props;
    return (
      <StyledFavButton
        role="button"
        aria-label="Favourite button"
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        className={"card__fav-button "+{className}}
        onClick={this._handleClick}>
          {this.state.isFav ? <IcHeartLiked24 /> : <IcHeart24 />}
        </StyledFavButton>
    )
  }
}

FavButton.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
};

FavButton.defaultProps = {
  top: false,
  right: false,
  bottom: false,
  left: false,
};

export default FavButton;
