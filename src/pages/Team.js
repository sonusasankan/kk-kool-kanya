import React, { Component } from "react";

import { Button } from "../components/Button";

//images//
import team1 from "../assets/images/oval.jpg";
import team2 from "../assets/images/oval-2.jpg";
import team3 from "../assets/images/oval-3.jpg";
import team4 from "../assets/images/oval-4.jpg";
import bgElement1 from "../assets/images/teamelements.svg";
import bgElement2 from "../assets/images/bg-dots-element.svg";
import bgElement3 from "../assets/images/bg-circle-single-small.svg";

export default class Team extends Component {
  render() {
    return (
    <React.Fragment>
      <section className="kk-section mt-5">

       {/*background elements*/}
       <div className="kk-team-element-bg-1">
        <img src={bgElement1} alt="background element circle"/>
       </div>
       <div className="kk-team-element-bg-2">
        <img src={bgElement2} alt="background element circle"/>
       </div>
       <div className="kk-team-element-bg-3">
        <img src={bgElement3} alt="background element circle"/>
       </div>
       {/*background elements*/}

        <div className="container">
          <div className="row-fluid text-center w-75 mx-auto">
            <h2 className="kk-section-title mb-0 mb-md-2">Our Team</h2>
            <p>
              We are a team of creative problem solvers. Our practice balances
              thinking and doing, empowering us to recommend strategic
              opportunities and realize impactful solutions.
            </p>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team1} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Rosmy George</h4>
                        <h6 className="kk-subtitle">Chief Executive Officer</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team1} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Rosmy George</h4>
                    <h6 className="kk-subtitle">Chief Executive Officer</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom-left">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team2} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Slavcho Karbashewski</h4>
                        <h6 className="kk-subtitle">President, Kool Kanya, NY</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team2} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Slavcho Karbashewski</h4>
                    <h6 className="kk-subtitle">President, Kool Kanya, NY</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom-left">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team3} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Irene Sotelo</h4>
                        <h6 className="kk-subtitle">Chief Creative Officer</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team3} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Irene Sotelo</h4>
                    <h6 className="kk-subtitle">Chief Creative Officer</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom-left">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team4} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Ariana Barros</h4>
                        <h6 className="kk-subtitle">Chief Media Officer</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team4} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Ariana Barros</h4>
                    <h6 className="kk-subtitle">Chief Media Officer</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team3} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Irene Sotelo</h4>
                        <h6 className="kk-subtitle">Chief Creative Officer</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team3} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Irene Sotelo</h4>
                    <h6 className="kk-subtitle">Chief Creative Officer</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom-left">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team1} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Rosmy George</h4>
                        <h6 className="kk-subtitle">Chief Executive Officer</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team1} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Rosmy George</h4>
                    <h6 className="kk-subtitle">Chief Executive Officer</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom-left">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team2} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Slavcho Karbashewski</h4>
                        <h6 className="kk-subtitle">President, Kool Kanya, NY</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team2} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Slavcho Karbashewski</h4>
                    <h6 className="kk-subtitle">President, Kool Kanya, NY</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3 kk-team-photo-column p-3 border-bottom-left">
                <div className="kk-team-member-photo-wrapper">
                    <div className="kk-team-member-photo">
                        <img src={team3} alt="team photo"/>
                    </div>
                    <div className="kk-team-member-details">
                        <h4 className="kk-title">Irene Sotelo</h4>
                        <h6 className="kk-subtitle">Chief Creative Officer</h6>
                    </div>
                </div>
                <div className="kk-team-member-photo-overlay d-flex flex-column">
                    <img src={team3} alt="team photo"/>
                    <div className="kk-team-content mt-auto">
                    <h4 className="kk-title">Irene Sotelo</h4>
                    <h6 className="kk-subtitle">Chief Creative Officer</h6>
                    <p>Lover of a good meme, Karen fancies both design and front-end development. She is an avid basketballer, runner and exercise junkie. Crocheting with a cup of tea in front of the telly? Yep you'll find her doing that, too.</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
      <div className="kk-team-cta-section kk-bg-light py-5">
        <div className="container">
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
      </React.Fragment>
    );
  }
}
