import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './style';

import netbramhaLogo from '../../assets/images/nb-logo.png';
import FooterDecElemenet from '../../assets/images/img-footer-element.svg';
import FooterDecElemenet1 from '../../assets/images/img-footer-element-1.svg';


import { IoIosArrowForward } from "react-icons/io";


const footer = () => (
  <Footer>
    <img className="kk-footer__bg" src={FooterDecElemenet1} alt="decotrative element" />
    <img className="kk-footer__bg--1" src={FooterDecElemenet} alt="decotrative element" />
    <div className="container">
      <div className="d-flex flex-wrap">
        <div className="kk-footer kk-footer__big">
          <div>Help other women achieve their goals!</div>
          <Link to="/"><span>Become a Kool Kanya</span><IoIosArrowForward /></Link>
        </div>
        <div className="kk-footer">
          <nav className="kk-footer__nav">
            <div className="kk-footer__nav__head">Quick Links</div>
            <Link to="about-us">About Us</Link>
            <Link to="team">Team</Link>
            <Link to="careers">Careers</Link>
            <Link to="contact">Contact</Link>
          </nav>
        </div>
        <div className="kk-footer">
          <nav className="kk-footer__nav">
            <div className="kk-footer__nav__head">Community</div>
            <Link to="faq">FAQ</Link>
            <Link to="terms-conditions">Terms of Use</Link>
            <Link to="privacy-policy">Privacy Policy</Link>
          </nav>
        </div>
        <div className="kk-footer">
          <nav className="kk-footer__nav kk-footer__nav__contact">
            <div className="kk-footer__nav__head">Contact Us</div>
            <a href="javascript:void(0)">Feel free to reach out to us</a>
            <div className="d-flex justify-content-between">
              <Link to="terms-conditions"><span className="icon-ic-facebook-24"></span></Link>
              <Link to="terms-conditions"><span className="icon-ic-linkedin-24"></span></Link>
              <Link to="terms-conditions"><span className="icon-ic-twitter-24"></span></Link>
              <Link to="terms-conditions"><span className="icon-ic-instagram-24"></span></Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="kk-footer__cp container-fluid">
      <div className="container kk-footer__cp__internal">
        <div><span>&copy;</span> Copyright 2018. All rights reserved.</div>
        <div>Designed by <Link to="https://netbramha.com/"><img src={netbramhaLogo} alt="Netbramha Studio" height="24px" width="24px" /></Link></div>
      </div>
    </div>
  </Footer>
);

export default footer;
