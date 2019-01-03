import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Button} from '../../components/Button';
import {Sidebar} from '../Saved/style';
import ContentWrapper from './style';

class EditSettings extends Component{
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
            <React.Fragment>
                <section className="container-fluid" style={{backgroundColor: '#fbfbfb'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 d-none d-md-block">
                                <Sidebar>
                                    <ul>
                                        <li><h3>My Profile</h3></li>
                                        <li><Link to='/favourites'><h3>Favourites</h3></Link></li>
                                        <li><Link to='/'><h3>Become a Kool Kanya</h3></Link></li>
                                        <li><Link to='/'><h3>Settings</h3></Link></li>
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

                                        <strong>Password</strong>
                                        <Link to="/edit-settings">Change password <MdKeyboardArrowRight/></Link>
                                    </div>

                                    <div className="kk-notifications border-bottom">
                                        <h3 className="mb-4">Notification Settings</h3>
                                        <p>You're receiving notigications at <span>agrawal92.deepti@gmail.com</span></p>

                                        <h4>Receiving Notifications for:</h4>
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
            </React.Fragment>
        )
    }
}

export default EditSettings;
