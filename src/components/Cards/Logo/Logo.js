import React from 'react';
import PropTypes from 'prop-types';

import Logo from './style';

const logo = ({ src, alt }) => (
  <Logo className="kk-card__logo">
    <img src={src} alt={alt} />
  </Logo>
);

logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

logo.defaultProps = {
  alt: 'Image',
};

export default logo;
