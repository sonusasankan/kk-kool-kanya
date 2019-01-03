import React from 'react';
import PropTypes from 'prop-types';
import BreadCrumb from './style';

const breadCrumb = ({
  children,
}) => (
  <BreadCrumb>
    <ul>
      {children}
    </ul>
  </BreadCrumb>
);

breadCrumb.propTypes = {
  children: PropTypes.func.isRequired,
};

export default breadCrumb;
