import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import Wrapper from './style';


const wrapper = ({
  link,
  cardType,
  big,
  small,
  textOverlay,
  landscape,
  hasDescription,
  children,
  styleName
}) => (
  <Link to={link}>
    <Wrapper
      className={cardType +' ' + (landscape ? " landscape " : "") + (small ? " small " : "") + (big ? " big " :"") + (textOverlay ? " textOverlay " :"") + (hasDescription ? "hasDescription " : "") +""+ styleName}
      landscape={landscape}
    >
      {children}
    </Wrapper>
  </Link>
);

wrapper.propTypes = {
  link: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  cardType: PropTypes.string,
  landscape: PropTypes.bool,
  small: PropTypes.bool,
  big: PropTypes.bool,
  textOverlay: PropTypes.bool,
  hasDescription: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.string]).isRequired,
  styleName: PropTypes.string
};

wrapper.defaultProps = {
  link: false,
  cardType: '',
  landscape: false,
  small: false,
  big: false,
  textOverlay: false,
  hasDescription: false,
};

export default wrapper;
