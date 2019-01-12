import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FiDownload} from 'react-icons/fi';
import pdfImg from '../../assets/images/ic-pdf-44.svg';

import Avatar from '../../components/Avatar';
import {CardDetails} from '../../components/Cards';
import {ContentWrapper} from './style';
import {Sidebar} from '../Saved/style';
import '../Setting/bgElements.scss';

import {Parallax, ParallaxProvider } from 'react-scroll-parallax';

class Profile extends Component{

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
                                        <li><h3>My Profile</h3></li>
                                        <li><Link to='/favourites'><h3>Favourites</h3></Link></li>
                                        <li><Link to={window.location.pathname}><h3>Become a Kool Kanya</h3></Link></li>
                                        <li><Link to='/settings'><h3>Settings</h3></Link></li>
                                    </ul>
                                </Sidebar>
                            </div>
                            <div className="col-12 col-md-9">
                                <ContentWrapper>
                                    <div className="border-bottom kk-avatar">
                                        <Avatar
                                            isLoggedIn
                                            imgSrc="https://loremflickr.com/151/151"
                                        />
                                        <div className="kk-avatar__text">
                                            <h2>Deepti Agrawal</h2>
                                            <CardDetails icon="icon-ic-location-24">Banglore, Karnataka</CardDetails>
                                            <CardDetails icon="icon-ic-dob">20th February, 1995</CardDetails>
                                        </div>
                                    </div>
                                    <div className="kk-interest border-bottom">
                                        <h3>Interested in companies good for </h3>
                                        <ul>
                                            <li>Maternity benefits</li>
                                            <li>Work-life balance</li>
                                            <li>Work satisfaction</li>
                                        </ul>
                                    </div>
                                    <div className="kk-primary-goals border-bottom">
                                        <h3>Primary career goals</h3>
                                        <div>
                                            <div className="kk-capsule">New career</div>
                                            <div className="kk-capsule">Career</div>
                                            <div className="kk-capsule">New Job</div>
                                            <div className="kk-capsule">Job Search</div>
                                            <div className="kk-capsule">Job Seeking</div>
                                            <div className="kk-capsule">Career switch</div>
                                            <div className="kk-capsule">Better opportunities</div>
                                            <div className="kk-capsule">Salary hike</div>
                                            <div className="kk-capsule">Job switch</div>
                                        </div>
                                    </div>
                                    <div className="kk-resume__wrapper">
                                        <h3>Resume</h3>
                                        <div className="kk-resume">
                                            <div className="d-flex">
                                                <div className="kk-resume__pdf-icon"><img src={pdfImg} alt="pdf logo" /></div>
                                                <div className="kk-resume__name__wrapper">
                                                    <div className="kk-resume__name">Deeptiagrawal_resume.pdf</div>
                                                    <span>2MB</span>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="/" className="kk-resume__action-link"><FiDownload /> <span>Download resume</span></a>
                                            </div>
                                        </div>
                                        {/* <div className="kk-resume">
                                            <div>
                                                <div className="kk-resume__name">Deeptiagrawal_resume.pdf</div>
                                                <span>2MB</span>
                                            </div>
                                            <div>
                                                <a href="#"><FiDownload /> <span>Download resume</span></a>
                                            </div>
                                        </div> */}
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

export default Profile;
