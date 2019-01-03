import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideModal } from "../../store/actions/modal";
import Modal from "../../components/Modal";
import { Button } from "../../components/Button";

const signUp = ({ title, subTitle, afterClose, onSignIn, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  const handleSignIn = () => () => {
    onSignIn();
  };

  return (
    <Modal title={title} subTitle={subTitle} onClose={onClose}>
      <div className="kk-modal-btn-group">
      <button className="kk-btn-custom linkedin"><span className="icon-ic-linkedin-24 pt-2"></span> LinkedIn</button>
        <button className="kk-btn-custom facebook"><span className="icon-ic-facebook-24 pt-2"></span> facebook</button>
      </div>
      <div className="kk-form-br" />
      <div className="kk-sign-up-form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Name"
              aria-describedby="nameHelp"
            />
            <label className="kk-custom-label" htmlFor="Name">Name</label>
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="Email"
            />
            <label className="kk-custom-label" htmlFor="Email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="Password"
            />
            <label className="kk-custom-label" htmlFor="Password">Password</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="RePassword"
            />
            <label className="kk-custom-label" htmlFor="RePassword">Re Enter Password</label>
          </div>
          <Button styleName="curved w-100 mt-2 mt-md-4" type="submit" className="btn btn-primary">
            Register
          </Button>
        </form>
      </div>
      <div className="text-center mt-3">
        <p>
          Already registered? <strong className="kk-link" onClick={handleSignIn()}> Sign in</strong>
        </p>
      </div>
    </Modal>
  );
};

signUp.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(
  null,
  { hideModal }
)(signUp);
