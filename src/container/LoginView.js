import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../store/actions/modal';
import { MODAL_TYPE_SIGNUP, MODAL_TYPE_SIGNIN } from '../constants/ModalTypes';

class LoginView extends Component {
  showNotification = () => {
    this.props.showModal(MODAL_TYPE_SIGNUP, {
      title: 'This is an awesome notification.',
    });
  };

  showConfirm = () => {
    this.props.showModal(MODAL_TYPE_SIGNUP, {
      title: 'Do you confirm?',
      onConfirm: (isConfirmed) => {
        this.props.showModal(MODAL_TYPE_SIGNIN, {
          title: 'The user did confirm: ' + isConfirmed
        });
      }
    });
  };

  render () {
    return (
      <div>
        <button onClick={this.showNotification}>
          Show modal
        </button>
        <button onClick={this.showConfirm}>
          Show confirm
        </button>
      </div>
    )
  }
}

export default connect(null, { showModal })(LoginView)
