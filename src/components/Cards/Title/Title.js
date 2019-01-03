import React from 'react';
import PropTypes from 'prop-types';

import Title from './style';
import getExcerpt from '../getExcerpt';

const cardTitle = ({
  excerptLength,
  children,
}) => (
  <Title className="kk-card__title">{getExcerpt(children, excerptLength)}{console.log(getExcerpt)}</Title>
);

cardTitle.propTypes = {
  excerptLength: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired
};

cardTitle.defaultProp = {
  excerptLength: 8
}


export default cardTitle; 
