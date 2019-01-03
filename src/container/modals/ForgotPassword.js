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

  return (
    <Modal title={title} subTitle={subTitle} onClose={onClose}>
      <div className="kk-sign-up-form">
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="Email" />
            <label className="kk-custom-label" htmlFor="Email">
              Email
            </label>
          </div>
          <Button
            styleName="curved w-100 mt-2 mt-md-4"
            type="submit"
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
