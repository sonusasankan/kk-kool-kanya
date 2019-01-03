import React from 'react';
import PropTypes from 'prop-types';

import Body from './style';

const body = ({
  overlay,
  children,
  styleName
}) => (
  <Body className={"kk-card__body "+(overlay ? " overlay " : "") + styleName}>
    <div className="kk-card__text-wrapper">
      {children}
    </div>
  </Body>
);

body.propTypes = {
  overlay: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.string]).isRequired,
  styleName: PropTypes.string
};

body.defaultProps = {
  overlay: false
}

export default body;
