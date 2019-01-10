import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideModal } from "../../store/actions/modal";
import Modal from "../../components/Modal";
import { Button } from "../../components/Button";

const forgotPassword = ({
  title,
  subTitle,
  afterClose,
  hideModal,
  backToLogin
}) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  const handleClick = () => () => {
    backToLogin();
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
    <Modal title={title} subTitle={subTitle} onClose={onClose}>
      <div className="kk-sign-up-form">
        <form className="mx-2">
          <div className="form-group">
            <input onChange={inputAddClass} type="email" className="form-control" id="Email" />
            <label className="kk-custom-label" htmlFor="Email">
              Enter your registered Email ID
            </label>
          </div>
          <Button
            styleName="curved w-100 mt-2 mt-md-4"
            type="submit"
            onClick={onClose}
            className="btn btn-primary"
          >
            Send link
          </Button>
        </form>
      </div>
      <div className="text-center mt-3">
          <span className="kk-link" onClick={handleClick()}>
            {" "}
            Back to Login
          </span>
      </div>
    </Modal>
  );
};

forgotPassword.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(
  null,
  { hideModal }
)(forgotPassword);
