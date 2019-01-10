import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { hideModal } from '../../store/actions/modal';
import Modal from '../../components/Modal';
import { Button } from "../../components/Button";

const signIn = ({ title, onConfirm, afterClose, hideModal, subTitle,  onForgotPassword }) => {
  const handleConfirm = () => () => {
    onConfirm()
  };
  
  const handleForgotPassword = () => () => {
   onForgotPassword()
  }

  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };
  const inputAddClass = (e) => {
    let target = e.target
   if(target.value){
     target.classList.add("filled")
   }else{
    target.classList.remove("filled")
   }
  }
  
  return (
    <Modal title={title} onClose={onClose} subTitle={subTitle}>
      <div className="kk-modal-btn-group">
        <button className="kk-btn-custom linkedin"><span className="icon-ic-linkedin-24 pt-2"></span> LinkedIn</button>
        <button className="kk-btn-custom facebook"><span className="icon-ic-facebook-24 pt-2"></span> facebook</button>
      </div>
      <div className="kk-form-br" />
      <div className="kk-sign-up-form">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="Email"
              onChange={inputAddClass}
            />
            <label className="kk-custom-label" htmlFor="Email">Email ID</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="Password"
              onChange={inputAddClass}
            />
            <label className="kk-custom-label" htmlFor="Password">Password</label>
          </div>
          <div
            className="custom-control custom-checkbox text-left"
          >
              <input
                  type="checkbox"
                  className="custom-control-input"
                  id="remember-me"
                  onChange={inputAddClass}
              />
              <label
                  className="custom-control-label"
                  htmlFor="remember-me"
              >
                Remember Me
              </label>
          </div>
          <Button styleName="curved w-100 mt-2 mt-md-4" type="submit" className="btn btn-primary">
            Sign In
          </Button>
        </form>
      </div>
      <div className="text-center mt-3">
         <span className="kk-link mb-2" onClick={handleForgotPassword()}>Forgot your password?</span>   
        <p>
        Don’t have an account yet?  <strong className="kk-link" onClick={handleConfirm()}> Sign Up</strong>
        </p>
      </div>
    </Modal>
  );
};

export default connect(null, { hideModal })(signIn);
