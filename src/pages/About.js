import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { Button } from "../components/Button";
import {
  ArticleCard__Overlay
} from "./../components/Article";
//images
import iconBestCompany from "../assets/icons/ic-bestcompany.svg";
import iconAnalysis from "../assets/icons/ic-analysis.svg";
import icongetInTouch from "../assets/icons/ic-getintouch.svg";
import iconTransparency from "../assets/icons/ic-transparency.svg";
import iconAuthenticity from "../assets/icons/ic-authencity.svg";
import iconWholeheartedness from "../assets/icons/ic-wholeheartedness.svg";

import gridSmallImage from "../assets/images/aboutimg-7.jpg";
import gridLargeImage from "../assets/images/aboutimg-8.jpg";
import aboutImage01 from "../assets/images/aboutimg-3.jpg";
import aboutImage02 from "../assets/images/aboutimg-1.jpg";
import aboutImage03 from "../assets/images/aboutimg-4.jpg";
import aboutImage04 from "../assets/images/aboutimg-5.svg";
import aboutImage05 from "../assets/images/aboutimg-6.jpg";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="kk-team-section">
        <div className="container">
          <div className="row-fluid text-center px-0 px-md-5">
            <h2 className="kk-section-title mb-0 mb-md-2">About Us</h2>
            <h3>We are here to create the workforce of the future.</h3>
            <p>Our mission is to help young women cultivate successful careers through 
              straightforward and original career advice, community support, access to the best career coaches, 
              and a curated job board that offers you a behind the scenes look at job opportunities.</p>
          </div>
          <div className="kk-team-photos-wrapper d-flex flex-wrap">
             <div className="kk-team-photo kk-team-photo--small">
               <img src={aboutImage01} alt="team photo 01"/>
             </div>
             <div className="kk-team-photo kk-team-photo--large">
               <img src={aboutImage02} alt="team photo 02"/>
             </div>
             <div className="kk-team-photo kk-team-photo--lengthy">
               <img src={aboutImage03} alt="team photo 03"/>
             </div>
             <div className="kk-team-photo kk-team-photo--small">
               <img src={aboutImage04} alt="team photo 04"/>
             </div>
             <div className="kk-team-photo kk-team-photo--small">
               <img src={aboutImage05} alt="team photo 05"/>
             </div>
          </div>
          <div className="row-fluid w-75 mx-auto text-center">
            <p>Our vision is to have women own their futures. We are here to support, 
              encourage and inspire women to stick through the initial stages of their career to 
              prevent them from leaving work when they experience changes in their personal life.</p>
          </div>
        </div>
      </section>
      <section className="kk-about-values">
        <div className="container">
          <div className="row-fluid text-center">
            <h2 className="kk-section-title mb-5">Our values are highlighted by</h2>
          </div>
          <div className="row">
            <div className="col-md-4 text-center text-md-left">
              <img className="mb-4" src={iconTransparency} alt="icon transparency"/>
              <h5 className="kk-title-md">Transparency</h5>
              <p>We are transparent and honest in all our communication to you. This can be  seen in all our interaction,from the articles we write to the information we post. We believe honesty is the key to a strong relationship, one that we want to form with you. 
                We are truly here to create the workforce of the future</p>
            </div>
            <div className="col-md-4 text-center text-md-left">
              <img className="mb-4" src={iconAuthenticity} alt="icon Authnticity"/>
              <h5 className="kk-title-md">Authenticity</h5>
              <p>Inspires us to genuinely care about our employees, clients and their customers, society, and human kind.</p>
            </div>
            <div className="col-md-4 text-center text-md-left">
              <img className="mb-3" src={iconWholeheartedness} alt=""/>
              <h5 className="kk-title-md">Wholeheartedness</h5>
              <p>The capacity to engage in our lives with authenticity, cultivate courage and compassion, and embrace — not in that self-helpy.</p>
            </div>
          </div>
        </div>
        <div className="row-fluid">
            <img className="img-fluid" src="http://placehold.jp/1600x550.png" alt=""/>
          </div>
      </section>
      <section>
        <div className="container">
          <div className="row-fluid text-center mb-5">
            <h2 className="kk-section-title">What we do</h2>
            <h3>We are here to create the workforce of the future.</h3>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row mb-5">
                <div className="col-md-6">
                <div className="kk-custom-about-column kk-vertical-line kk-vertical-line--primary p-4">
                  <h4>Suggest the best companies and jobs based on user’s interests</h4>
                  <p>We believe women should have the flexibility of having the option to search for work 
                    environments which serve best to their requirements or lifestyles through 8 large categories which cover almost all the women out there.
                  </p>
                </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="kk-custom-about-icon">
                  <img src={iconBestCompany} alt="icon for best company"/>
                </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6 order-md-2">
                <div className="kk-custom-about-column kk-vertical-line kk-vertical-line--green p-4">
                  <h4>Generate the Kool Kanya Score Analysis for each company</h4>
                  <p>We believe women should have the flexibility of having the option to search for work environments which serve best to their requirements or lifestyles through 8 large categories which cover almost all the women out there.
                  </p>
                </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <div className="kk-custom-about-icon">
                    <img src={iconAnalysis} alt="icon for Analysis"/>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                <div className="kk-custom-about-column kk-vertical-line kk-vertical-line--red p-4">
                  <h4>Facilitate users to get in touch with Kool Kanyas at particular company</h4>
                  <p>We believe women should have the flexibility of having the option to search for work environments which serve best to their requirements or lifestyles through 8 large categories which cover almost all the women out there.</p>
                </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="kk-custom-about-icon">
                  <img src={icongetInTouch} alt="icon for Get in touch"/>
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section class="kk-about-team-second">
        <div className="container">
          <div className="kk-custom-grid-wrapper">
          <div className="kk-about-team-second-grid-small">
            <img src={gridSmallImage} alt="about random image"/>
          </div>
          <div className="kk-about-team-second-grid-large">
            <img src={gridLargeImage} alt="about random image"/>
          </div>
          <div className="kk-about-team-second-content-box">
             <p>It is a jungle out there. Millions of jobs and you are trying to find the one that supports you, inspires you, and pays you well. And we, at Kool Kanya believe you can and should love your job-and be successful at it.<br/><br/> 

We want to help make this happen. You are no longer alone on this journey we call our careers.</p>
          <Link to="team"><button className="btn kk-transparent-button w-75 mt-4">Our team</button></Link>
          </div>
          <div className="kk-about-team-second-grid-small mt-3 mt-md-0 ml-md-3">
            <img src={gridSmallImage} alt="about random image"/>
          </div>
          <div className="clearfix"></div>
          </div>
        </div>
        <div className="container">
        <div class="card kk-about-CTA">
          <div class="card-body">
            <div className="row">
            <div className="card-content col-md-8">
              <h4>Want to become a part of Kool Kanya community?</h4>
              <p>We believe women should have the flexibility of having the option to search for work
environments which serve best to their requirements </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <Button 
              //action//
              click={()=>{}} 
              styleName="px-5 fz-18">Join Us</Button>
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row-fluid text-center mt-md-5">
            <h2 className="kk-section-title mb-3 mb-md-5">Press releases</h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-2 mb-md-0">
                <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="When Are You Going Back? (Or: Maternity Leave is Complicated."
                />
            </div>
            <div className="col-md-4 mb-2 mb-md-0">
                <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="Why Do All Websites Look The Same?"
                />
            </div>
            <div className="col-md-4">
                <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="The Haunting (and Civically Responsible) Beauty of Halloween and..."
                />
            </div>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}
