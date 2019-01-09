import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link, NavLink } from 'react-router-dom';

import { IoMdMenu } from "react-icons/io"
import {HeaderWrapper} from './style';
import { showModal, hideModal } from  '../../store/actions/modal';
import { MODAL_TYPE_SIGNUP, MODAL_TYPE_SIGNIN, MODAL_TYPE_FORGOTPASSWORD} from '../../constants/ModalTypes';

import {Button} from '../Button';
import kkLogoPNG from '../../assets/images/kk-logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }

    this.toggle = this.toggle.bind(this);
  }

  body = document.querySelector('body');
  toggle(e){
    if(window.innerWidth < 992){
      this.body.classList.toggle('no-scroll');
      this.setState(state=>({
        show: !state.show
      }))
    }
    else{
      e.target.closest('ul').querySelectorAll('a').forEach((el)=>{
        if(el.classList.contains('active')){
          el.classList.remove('active')
        }
      });
      e.target.classList.add('active');
    }
  }

  //Sign Un modal//
  signUp = () => {
    this.props.showModal(MODAL_TYPE_SIGNUP, {
      title: 'Sign Up',
      subTitle: 'Welcome to Kool Kanya. Please signup here.',
      onSignIn: () => {
        this.signIn();
      }
    });
  };

  //Sign In modal//
  signIn = () => {
    this.props.showModal(MODAL_TYPE_SIGNIN, {
      title: 'Sign In',
      subTitle: 'Welcome to Kool Kanya. Please login here.',
      onConfirm: () => {
        this.signUp();
      },
      onForgotPassword: ()=>{
        this.forgotPassword();
      }
    });
  };

  //Sign In modal//
  forgotPassword = () => {
    this.props.showModal(MODAL_TYPE_FORGOTPASSWORD, {
      title: 'Forgot Your Password',
      subTitle: "Don't worry, happens to the best of us. We'll have you online again in no time. Enter your email below and we will send you a link to reset your password.",
      backToLogin: () => {
        this.signIn();
      }
    });
  };
  
  //Sticky header function//
  componentDidMount() {
    let lastScrollTop = 0;
    window.onscroll = function() {
      let top = parseInt(window.scrollY);
      let header = document.querySelector(".kk-header");
      if (top > lastScrollTop ) {
        header.classList.add("up");
        header.classList.remove("invert");
      } else if (top < 100) {
        header.classList.remove("down");
        if(document.body.classList.contains('kk-home')){
          header.classList.add("invert");
        }else{
          header.classList.remove("invert");
        }

      }
       else {
        header.classList.remove("up");
        header.classList.add("down");
      }

      if(top === 0){
        header.classList.remove('up');
      }
      lastScrollTop = parseInt(window.scrollY);
    };
  }

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper
         className={"container-fluid position-fixed kk-header "+((window.location.pathname === '/') ? "invert " : "")}
         id="Header"
        >
          <nav className="container">
            <div className="kk-brand-logo">
              <Link to="/" className="kk-brand-logo__img">
                <img src={kkLogoPNG} alt="Kool Kanya" className="w-100"/>
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <button className="toggleButton" onClick={this.toggle}><IoMdMenu /></button>
            </div>
            <div className={"kk-sidebar__bg "+(this.state.show ? "show" : "")} onClick={this.toggle}></div>
            <div className={"kk-menu__items "+(this.state.show ? "show" : "")}>
                <div className="kk-sidebar__header">
                  <div className="kk-sidebar__header__img">
                    <img className="w-100" src={kkLogoPNG} alt="Kool Kanya" />
                  </div>
                  <div className="kk-sidebar__header__title">
                    <h3>Kool Kanya</h3>
                  </div>
                </div>
                <ul>
                  <li><NavLink exact activeClassName="active" onClick={this.toggle} to="/">Home</NavLink></li>
                  <li><NavLink exact activeClassName="active" onClick={this.toggle} to="/companies">Companies</NavLink></li>
                  <li><NavLink exact activeClassName="active" onClick={this.toggle} to="/jobs">Job</NavLink></li>
                  <li><NavLink exact activeClassName="active" onClick={this.toggle} to="/articles">Article</NavLink></li>
                  <li><NavLink exact activeClassName="active" onClick={this.toggle} to="/about">About</NavLink></li>
                  <li className="kk-header__login">
                    <div className="kk-header__login__signin">
                      <Button
                        click={this.signIn}
                        label="Sign in"
                      />
                    </div>
                    <Link to="#">
                      <Button
                        primary={false}
                        hasBorder 
                        label="Sign up"
                        click={this.signUp}
                      />
                    </Link>
                  </li>
                </ul>
                  
            </div>
          </nav>
        </HeaderWrapper>
      </React.Fragment>
    );
  }
}

export default connect(null, { showModal })(Header)
