import React from 'react';
import PropTypes from 'prop-types';

import Description from './style';
import getExcerpt from '../getExcerpt';


const description = ({
  readMore,
  excerptLength,
  children,
}) => (
  <Description className="card__description">
    {getExcerpt(children, excerptLength)}
    <strong className="readMore">Read More</strong>
  </Description>
);

description.propTypes = {
  children: PropTypes.string.isRequired,
  excerptLength: PropTypes.number,
  readMore: PropTypes.string.isRequired,
};

description.defaultProps = {
  excerptLength: 15
}

export default description;
