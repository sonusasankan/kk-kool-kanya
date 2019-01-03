import React from 'react';
import PropTypes from 'prop-types';

import Rating from './style';

const rating = ({ children }) => (
  <Rating>
    {children}
  </Rating>
);

rating.propTypes = {
  children: PropTypes.string.isRequired,
};

export default rating;
