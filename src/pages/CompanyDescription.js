import React, { Component } from "react";

import godrej from "../assets/images/godrej.png";
import companyImage from "../assets/images/img-company-descrition-1.jpg";
import userAvatar from "../assets/images/user-avatar.png";
import SearchContainer from "../components/Search/SearchContainer"
/*Components*/
import Fav from "../components/FavButton";
import { Button } from "../components/Button";
import { CompanyCard } from "../components/CompanyCard";
import BreadCrumb from "../components/BreadCrumb";

import { FaStar } from "react-icons/fa";
import Carousel from "../components/Carousel";
import {
  // import BreadCrumb from './../components/BreadCrumb/style';
  FiMapPin,
  FiUsers,
  FiSmartphone,
  FiGlobe,
  FiChevronDown,
  FiArrowRight
} from "react-icons/fi";

//carousel options//
const option = {
  items: 1,
  margin: 16,
  nav: true,
  dots: true,
  URLhashListener	: true,
  responsive: {
    768: {
      margin: 32
    }
  }
};


export default class CompanyDescription extends Component {
  constructor(props) {
    super();
    this.graphElement = React.createRef();
    this.state = {
      companies: [
        {
          name: "Godrej",
          img: companyImage,
          imgCaption: "Some information about image",
          locations: ["Bangalore", "Delhi", "Noida"],
          rating: 4.5,
          Industry: "Consumer products",
          openings: 25,
        },
        {
          name: "IBM",
          img: companyImage,
          imgCaption: "Some information about image",
          locations: ["Bangalore", "Noida"],
          rating: 4.5,
          Industry: "Information technology",
          openings: 5
        },
        {
          name: "flipkart",
          img: companyImage,
          imgCaption: "Some information about image",
          locations: ["Delhi", "Noida"],
          rating: 4,
          Industry: "Consumer products",
          openings: 21
        },
        {
          name: "Paytm",
          img: companyImage,
          imgCaption: "Some information about image",
          locations: ["Delhi", "Noida"],
          rating: 3.5,
          Industry: "Consumer products",
          openings: 10
        }
      ],
      graph: {
        isDisplay: false,
        number: 0
      },
      personas: ['culture','Female representatives','Learning opportunities','Maternity benefits','Safety','Salary & benefits'],
      height: 0
    };
  }

  componentDidUpdate() {
    const height = this.graphElement.clientHeight;
    console.log(height)
  }

  graphShow = (index, callback) => {
    this.setState((...prevState) => ({
      ...prevState,
      graph: {
        isDisplay: !prevState.isDisplay,
        number: index
      },
    }))
    return callback;
  }
callback = () => {
  alert()
}
  render() {
    const { companies } = this.state;
    return (
      <React.Fragment>
        <div className="kk-search text-center">
            <SearchContainer placeholder="Search by company name, industry or location"/>
        </div>
        <section className="kk-breadcrumb py-0">
          <div className="container">
            <BreadCrumb>
              <li>Home</li>
              <li>Companies</li>
              <li>Serach results</li>
              <li>Godrej Consumer Product Ltd</li>
            </BreadCrumb>
          </div>
        </section>
        <section className="company-desc pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2">
                    <div className="company-logo">
                      <img className="img-fluid" src={godrej} />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="kk-company-desc-head d-flex flex-row align-items-start justify-content-between">
                      <div className="company-name">
                        <h3 className="kk-section-title">
                          Godrej Consumer
                          <br /> Product Limited
                        </h3>
                      </div>
                      <Fav grey />
                    </div>
                    <div className="company-rating d-flex align-items-center">
                      <span className="kk-rating-numbber d-flex align-items-center justify-content-center mr-2">
                        4.2
                      </span>
                      <ul className="d-inline-flex my-auto">
                        <li className="kk-star">
                          <FaStar />
                        </li>
                        <li className="kk-star">
                          <FaStar />
                        </li>
                        <li className="kk-star">
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                    <div className="company-details border-top py-3 my-3">
                      <ul>
                        <li
                          role="location"
                          className="d-flex kk-company-location"
                        >
                          <FiMapPin />
                          <p className="text-muted">
                            Pune (Headoffice), Delhi, Bangalore, Mumbai
                          </p>
                        </li>
                        <li className="d-flex kk-company-location">
                          <FiUsers />
                          <p className="text-muted">
                            2000+ employees ( 46% women)
                          </p>
                        </li>
                        <li className="d-flex kk-company-location">
                          <FiSmartphone />
                          <p className="text-muted">Interaction Design</p>
                        </li>
                        <li className="d-flex kk-company-location">
                          <FiGlobe />
                          <p className="text-muted">www.godrej.com</p>
                        </li>
                      </ul>
                      <p>
                        Established in 1897, the Godrej Group has its roots in
                        India's Independence and Swadeshi movement. They enjoy
                        the patronage of 1.1 billion consumers globally.
                      </p>
                    </div>
                    <div className="kk-cta-row">
                      <Button
                        styleName="curved mr-3 mb-2 mb-md-0"
                        label="Talk to a Kool Kanya"
                      />
                      <Button primary={false} hasBorder styleName="curved mb-4 mb-md-0">
                        View Jobs <span>(18)</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <Carousel option={option}>
                  <div className="item">
                    <img src={companyImage} alt="" />
                  </div>
                  <div className="item">
                    <img src={companyImage} alt="" />
                  </div>
                  <div className="item">
                    <img src={companyImage} alt="" />
                  </div>
                  <div className="item">
                    <img src={companyImage} alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <section className="kk-company-score kk-main-section">
          <div className="container">
            <div className="row-fluid mb-2 mb-md-5">
              <h3 className="kk-section-title">Kool Kanya Score Analysis</h3>
            </div>
            <div className="row">
              <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                    <div className="kk-company-rating-large d-flex align-items-center">
                      <span className="mx-auto kk-number-lg">4.5</span>
                    </div>
                  </div>
                  <div className="col-md-8">
                      <p>
                        Kool Kanya rating is an aggregate score based on anonymous
                        surveys from employees or ex-employees from a company
                      </p>
                    </div>
              </div>
                <ul className="kk-company-accreditations d-flex">
                  <li>
                    <span className="kk-star lg">
                      <FaStar />
                    </span>
                    <br />
                    <span>Safest company for women</span>
                  </li>
                  <li>
                    <span className="kk-star lg">
                      <FaStar />
                    </span>
                    <br />
                    <span>Best company for culture</span>
                  </li>
                  <li>
                    <span className="kk-star lg">
                      <FaStar />
                    </span>
                    <br />
                    <span>Best company for maternity benefits</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="row">
                 {
                   this.state.personas.map((persona, index) => {
                      return(
                        <div style={{position: "static"}} className="col-sm-4">
                          <div onClick={() => this.graphShow(index)} className="card kk-rating-card">
                              <div className="card-body">
                                <h2>4.5</h2>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  />
                                </div>
                                <p className="card-text">
                                  <small className="text-muted">{persona}</small>
                                </p>
                              </div>
                            </div>
                            {
                              this.state.graph.isDisplay && this.state.graph.number === index? <div ref={this.graphElement} className="row kk-company-score-graph-wrap">
                              <div className="col-md-12">
                                <div className={`kk-company-score-graph `}>
                                  <h4>{persona}</h4>
                                </div>
                              </div>
                            </div>: ""
                            }
                        </div>
                      )
                   })
                 }              
                </div>
              </div>
            </div>
            <div className="kk-company-review-wrapper mt-5">
              <div className="row mb-5">
                <div className="col-md-2">
                  <div className="kk-author">
                    <img className="img-fluid" src={userAvatar} />
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="kk-color-dark fz-18">
                    It is an essential part of my process, helping me shape my
                    portfolio in order to get my awesome new job by thinking
                    about how I present my work simply & in bite-sized chunks.
                  </p>
                  <div className="author">
                    <p className="kk-color-dark my-0">Deepali Yadav</p>
                    <p className="text-muted">
                      CEO at Godrej Consumer Product{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-2">
                <div className="kk-author">
                    <img className="img-fluid" src={userAvatar} />
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="kk-color-dark fz-18">
                    It is an essential part of my process, helping me shape my
                    portfolio in order to get my awesome new job by thinking
                    about how I present my work simply & in bite-sized chunks.
                  </p>
                  <div className="author">
                    <p className="kk-color-dark my-0">Stuthi Yadav</p>
                    <p className="text-muted">
                    Project Manager at Godrej Consumer Product 
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 offset-md-2">
                  <Button
                    styleName="p-0"
                    primary={false}
                    label="Read All Reviews"
                    icon={<FiChevronDown className="icon" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="kk-company-openings">
          <div className="container">
            <div className="row-fluid mb-2 mb-md-5">
              <h3 className="kk-section-title">Current Openings </h3>
            </div>
            <div className="row-fluid">
              <div className="card">
                <div className="card-body pl-0">
                  <div className="row justify-content-between">
                    <div className="col-md-4">
                      <h5 className="card-title">UI/UX Designer</h5>
                      <ul className="d-flex kk-inline-list-dotted mb-1">
                        <li className="item">Bengaluru</li>
                        <li className="item">2+ years</li>
                        <li className="item">Full Time</li>
                      </ul>
                      <p className="kk-text-small-light">Posted 1 week ago</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                      <Button
                        styleName="d-none d-md-block"
                        primary={false}
                        isAlignRight={true}
                        label="View Job Details"
                        icon={<FiArrowRight className="icon" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pl-0">
                  <div className="row justify-content-between">
                  <div className="col-md-4">
                      <h5 className="card-title">Operation Manager</h5>
                      <ul className="d-flex kk-inline-list-dotted mb-1">
                        <li className="item">Bengaluru</li>
                        <li className="item">2+ years</li>
                        <li className="item">Full Time</li>
                      </ul>
                      <p className="kk-text-small-light">Posted 1 week ago</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                      <Button
                        styleName="d-none d-md-block"
                        primary={false}
                        isAlignRight={true}
                        label="View Job Details"
                        icon={<FiArrowRight className="icon" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pl-0">
                  <div className="row justify-content-between">
                    <div className="col-md-4">
                      <h5 className="card-title">Product Designer</h5>
                      <ul className="d-flex kk-inline-list-dotted mb-1">
                        <li className="item">Bengaluru</li>
                        <li className="item">2+ years</li>
                        <li className="item">Full Time</li>
                      </ul>
                      <p className="kk-text-small-light">Posted 1 week ago</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                      <Button
                        styleName="d-none d-md-block"
                        primary={false}
                        isAlignRight={true}
                        label="View Job Details"
                        icon={<FiArrowRight className="icon" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-fluid text-center mt-5">
              <Button primary={false} hasBorder styleName="curved">
                View All<span>(18)</span>
              </Button>
            </div>
          </div>
        </section>
        <section className="kk-similar-companies kk-bg-light">
          <div className="container">
            <div className="row-fluid mb-2 mb-md-5">
              <h3 className="kk-section-title">Similar Companies</h3>
            </div>
            <div className="row">
              {companies.map(company => {
                return (
                  <div className="col-md-3">
                    <CompanyCard
                      locations={company.locations.join(",")}
                      title={company.name}
                      img={company.img}
                      alt="img alt"
                      industry="IT"
                      openings="23"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
