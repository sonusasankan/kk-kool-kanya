import React from 'react';
import PropTypes from 'prop-types';

import CardHead from './style';

const header = ({ children }) => (
  <CardHead className="kk-card__header">{children}</CardHead>
);

header.propTypes = {
  children: PropTypes.func.isRequired,
};

export default header;
