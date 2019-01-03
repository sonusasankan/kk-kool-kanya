import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from './style';


const buttonGroup = ({ children }) => (
  <ButtonGroup split={children.length}>
    {children}
  </ButtonGroup>
);

buttonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.string]).isRequired,
};

export default buttonGroup;
