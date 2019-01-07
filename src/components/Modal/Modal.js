import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import modalImage from "../../assets/images/modal.jpg";
import { MdClose } from "react-icons/md";


import './modal.scss';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.65);
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  // padding: 4px;
  cursor: pointer;

  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    content: "";
  }
`;

const Dialog = styled.div`
  position: relative;
  display: inline-flex;
  outline: 0;
  width: 100%;
  background: white;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 890px;
  cursor: default;
  height: 100vh;
  border-radius: 4px;
  overflow: hidden;
  @media(min-width: 768px){
    height: auto;
  }
`;

const Header = styled.div`
  padding: 16px 8px 8px 8px;
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`;

const Body = styled.div`
  padding-bottom: 16px;
`;

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    onClose: PropTypes.func
  };

  listenKeyboard = event => {
    if (event.key === "Escape" || event.keyCode === 27) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener("keydown", this.listenKeyboard, true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener("keydown", this.listenKeyboard, true);
    }
  }

  get title() {
    const { title } = this.props;

    return title ? (
      <div className="kk-modal-title">
        <h3>{title}</h3>
      </div>
    ) : null;
  }

  get subTitle() {
    const { subTitle } = this.props;

    return subTitle ? (
      <div className="kk-modal-sub-title">
        <p>{subTitle}</p>
      </div>
    ) : null;
  }

  get close() {
    const { onClose } = this.props;

    return onClose ? <div className="kk-modal-close" onClick={onClose}><MdClose /></div> : null;
  }

  onOverlayClick = () => {
    this.props.onClose();
  };

  onDialogClick = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <div className="kk-modal">
        <Overlay />
        <Content onClick={this.onOverlayClick}>
          <Dialog onClick={this.onDialogClick}>
            <div className="kk-modal-left">
              <img className="kk-modal-image" src={modalImage} alt="An architecture" />
            </div>
            <div className="kk-modal-right">
              {this.close}
              <Header className="kk-modal-header">
                {this.title}
                {this.subTitle}
              </Header>
              <Body>
                <div className="kk-modal-form-wrapper">
                  {/* <form action="">
                  <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Deepika verma" />
                  </div>
                  </form> */}
                </div>
                {this.props.children}
              </Body>
            </div>
          </Dialog>
        </Content>
      </div>
    );
  }
}
