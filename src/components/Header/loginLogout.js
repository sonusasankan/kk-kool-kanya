import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import {Button} from '../Button';
import getExcerpt from '../Cards/getExcerpt';

import {PostLoginWrapper} from './style';
import { IoIosArrowDown, IoIosArrowUp, IoIosLogOut } from "react-icons/io";
import { FiUser, FiHeart, FiUserPlus, FiSettings  } from "react-icons/fi";

//importing icons for profile dropdown
import User from '../../assets/images/postLoginIcons/ic-profile-active.svg';
import Favourites from '../../assets/images/postLoginIcons/ic-favorites.svg';
import BKK from '../../assets/images/postLoginIcons/ic-bakk.svg';
import Settings from '../../assets/images/postLoginIcons/ic-settings.svg';
import Signout from '../../assets/images/postLoginIcons/ic-signout.svg';

class Login extends Component {
    render(){
        const {
            loginClick,
            signUpClick
        } = this.props;
        return(
            <React.Fragment>
                <div className="kk-header__login__signin">
                    <Button
                        click={loginClick}
                        label="Sign in"
                    />
                </div>
                <Link className="kk-header__login link" to="/">
                    <Button
                        primary={false}
                        hasBorder 
                        label="Sign up"
                        click={signUpClick}
                    />
                </Link>
            </React.Fragment>
        )
    }
}


class PostLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDropDownOpen : false
        }
    }
    toggleOpenCloseDropDown(){
        let dropDownState = this.state.isDropDownOpen;
        this.setState({
            isDropDownOpen: !dropDownState
        })
    }
    render(){
        const{
            profilePic,
            profileName,
            linkClick
        } = this.props;
        return(
            <PostLoginWrapper className="kk-post-login" onClick={this.toggleOpenCloseDropDown.bind(this)}>
                <div className="kk-img-wrapper">
                    <img src={profilePic} alt={profileName} />    
                </div>
                <div className="kk-name">
                    {getExcerpt(profileName, 20)}
                </div>
                {window.innerWidth < 992
                    ? (this.state.isDropDownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />)
                    : (this.state.isDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />)
                }

                {/* dropdown */}
                <div className={"kk-postlogin-dropdown "+(!this.state.isDropDownOpen ? "d-none" : "")}>
                    <Link
                        onClick={linkClick}
                        to="/profile"
                        className="kk-postlogin-dropdown__item d-flex align-items-center">
                            <span className="px-2 kk-post-login-icons"><FiUser /></span>
                            <span>My Profile</span>
                    </Link>
                    <Link
                        onClick={linkClick}
                        to="/favourites"
                        className="kk-postlogin-dropdown__item  d-flex align-items-center">
                            <span className="px-2 kk-post-login-icons"><FiHeart /></span>
                            <span>Favourites</span>
                    </Link>
                    <Link
                        onClick={linkClick}
                        to="/profile"
                        className="kk-postlogin-dropdown__item d-flex align-items-center">
                            <span className="px-2 kk-post-login-icons"><FiUserPlus /></span>
                            <span>Become a Kool Kanya</span>
                    </Link>
                    <Link
                        onClick={linkClick}
                        to="/settings"
                        className="kk-postlogin-dropdown__item d-flex align-items-center">
                            <span className="px-2 kk-post-login-icons"><FiSettings /></span>
                            <span>Settings</span>
                    </Link>
                    <Link
                        onClick={linkClick}
                        to="/"
                        className="kk-postlogin-dropdown__item d-flex align-items-center">
                            <span className="px-2 kk-post-login-icons" style={{fontSize: "18px"}}><IoIosLogOut /></span>
                            <span>Signout</span>
                    </Link>
                </div>
            </PostLoginWrapper>
        )
    }
}


export {Login, PostLogin };