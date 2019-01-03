import React from 'react';
import { connect } from 'react-redux';

import SignUp from './modals/signUp';
import SIgnIn from './modals/signIn';
import ForgotPassword from './modals/ForgotPassword';

import { MODAL_TYPE_SIGNUP, MODAL_TYPE_SIGNIN, MODAL_TYPE_FORGOTPASSWORD } from '../constants/ModalTypes';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_SIGNUP]: SignUp,
  [MODAL_TYPE_SIGNIN]: SIgnIn,
  [MODAL_TYPE_FORGOTPASSWORD]: ForgotPassword,
};

const ModalRoot = ({ type, props }) => {
  if (!type) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);
