import React from 'react';
import PropTypes from 'prop-types';

import Image from './style';


const image = ({
  src,
  alt,
  children
}) => (
  <Image className="card__img">
    <img src={src} alt={alt} />
    {children}
  </Image>
);

image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.func
};

image.defaultProps = {
  alt: '',
  children: []
};

export default image;
