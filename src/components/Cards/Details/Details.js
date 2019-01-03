import React from 'react';
import PropTypes from 'prop-types';

import { DetailsWrapper, Details, Icon } from './style';

const details = ({
  icon,
  children,

}) => (
  <DetailsWrapper  center className="d-flex align-items-center kk-card-details__wrapper">
    {icon ? <Icon style={{"marginRight": 10}} className={`${icon} card__details__icon`} /> : ''}
    <Details className="kk-card-details">{children}</Details>
  </DetailsWrapper>
);

details.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  center: PropTypes.bool
};

details.defaultProps = {
  icon: false,
  center: false
};


export default details;
