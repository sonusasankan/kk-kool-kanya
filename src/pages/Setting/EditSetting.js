import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Button} from '../../components/Button';
import {Sidebar} from '../Saved/style';
import ContentWrapper from './style';
import './bgElements.scss';

import {Parallax, ParallaxProvider } from 'react-scroll-parallax';

class Setting extends Component{
    constructor(props){
        super(props);
        this.state={
            newNotifications: true,
            newComments: true
        }
    }

    _toggleState(st, val){
        console.log(st, val);
        if(st==="newNotifications"){
            this.setState({
                newNotifications: val
            })
        }
        if(st==="newComments"){
            this.setState({
                newComments: val
            })
        }
    }

    render(){
        return(
            <ParallaxProvider>
                <section className="container-fluid" style={{backgroundColor: '#fbfbfb'}}>
                <Parallax
                        className="kk-setting-bg kk-setting-bg--1"
                        offsetYMax={120}
                        offsetYMin={-120}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="kk-bg-circle--filled" />
                    </Parallax>
                    <Parallax
                        className="kk-setting-bg kk-setting-bg--2"
                        offsetYMax={80}
                        offsetYMin={-80}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="kk-bg-circle--bordered" />
                    </Parallax>
                    <Parallax
                        className="kk-setting-bg kk-setting-bg--3"
                        offsetYMax={40}
                        offsetYMin={-40}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="kk-bg-circle--light" />
                    </Parallax>
                    <div className="container" style={{marginTop: 72}}>
                        <div className="row">
                            <div className="col-3 d-none d-md-block">
                                <Sidebar>
                                    <ul>
                                        <li><Link to="/profile"><h3>My Profile</h3></Link></li>
                                        <li><Link to='/favourites'><h3>Favourites</h3></Link></li>
                                        <li><Link to='/'><h3>Become a Kool Kanya</h3></Link></li>
                                        <li><h3>Settings</h3></li>
                                    </ul>
                                </Sidebar>
                            </div>
                            <div className="col-12 col-md-9">
                                <ContentWrapper>
                                    <div className="kk-account border-bottom">
                                        <h3>Account Settings</h3>
                                        <label for="email">
                                            <strong>Email</strong>
                                            <input id="email" type="email" placeholder=" Email address" value="agrawal92.deepti@gmail.com" />
                                        </label>

                                        <strong className="mb-3">Password</strong>
                                        <label for="currentPass">
                                            <div>Current password</div>
                                            <input id="currentPass" type="password" placeholder=" Email address" value="agrawal92.deepti@gmail.com" />
                                        </label>
                                        <label for="newPass">
                                            <div>New password</div>
                                            <input id="newPass" type="password" placeholder=" Email address" value="agrawal92.deepti@gmail.com" />
                                        </label>
                                        <label for="confPass">
                                            <div>Re-type password</div>
                                            <input id="confPass" type="password" placeholder=" Email address" value="agrawal92.deepti@gmail.com" />
                                        </label>
                                    </div>

                                    <div className="kk-notifications border-bottom">
                                        <h3 className="mb-4">Notification Settings</h3>

                                        <div className="kk-notifications__sub">Receiving Notifications for:</div>
                                        <div className="kk-options mb-3">
                                            <div>New Articles</div>
                                            <div className="kk-btn-wrapper">
                                                <button className={(this.state.newNotifications) ? "active" : ""} onClick={this._toggleState.bind(this, "newNotifications", true)}>On</button>
                                                <button className={!(this.state.newNotifications) ? "active" : ""} onClick={this._toggleState.bind(this, "newNotifications", false)}>Off</button>
                                            </div>
                                        </div>
                                        <div className="kk-options">
                                            <div>New comments on your posts</div>
                                            <div className="kk-btn-wrapper">
                                                <button className={(this.state.newComments) ? "active" : ""} onClick={this._toggleState.bind(this, "newComments", true)}>On</button>
                                                <button className={!(this.state.newComments) ? "active" : ""} onClick={this._toggleState.bind(this, "newComments", false)}>Off</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kk-cta-row">
                                        <Button
                                            styleName="curved mr-3 mb-2 mb-md-0"
                                            label="Save"
                                        />
                                        <Button primary={false} hasBorder styleName="curved mb-4 mb-md-0">
                                            Cancel
                                        </Button>
                                    </div>
                                </ContentWrapper>
                            </div>
                        </div>
                    </div>
                </section>
            </ParallaxProvider>
        )
    }
}

export default Setting;
