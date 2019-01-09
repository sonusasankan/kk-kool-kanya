import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';

import godrej from "../assets/images/godrej.png";
import companyImage from "../assets/images/img-company-descrition-1.jpg";
import userAvatar from "../assets/images/user-avatar.png";
import SearchContainer from "../components/Search/SearchContainer";
/*Components*/
import Fav from "../components/FavButton";
import { Button } from "../components/Button";
import { CompanyCard } from "../components/CompanyCard";
import BreadCrumb from "../components/BreadCrumb";
import SectionSpecificStickyHeader from './../container/SectionSpecificStickyHeader/SectionSpecificStickyHeader';

import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Carousel from "../components/Carousel";
import {
  // import BreadCrumb from './../components/BreadCrumb/style';
  FiMapPin,
  FiUsers,
  FiSmartphone,
  FiGlobe,
  FiChevronDown,
  FiArrowRight,
  FiChevronRight
} from "react-icons/fi";

const chartData = {
  labels: ["Maternity leaves", "Supported on return"],
  datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }]
}

const chartOptions = {
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
  }
}
//carousel options//
const option = {
  loop: true,
  center: true,
  margin: 0,
  callbacks: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2,
      margin: 16,
      stagePadding: 16
    },
    992: {
      items: 3,
      margin: 8,
      nav: true,
      stagePadding: 32
    }
  }
};

const onTranslated = function() {
  let imgsrc = document
    .querySelector(".owl-item.active.center img")
    .getAttribute("src");
  document.querySelector("#imgholder").setAttribute("src", imgsrc);
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
          openings: 25
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
        isDisplay: true,
        number: 0
      },
      personas: [
        "culture",
        "Female representatives",
        "Learning opportunities",
        "Maternity benefits",
        "Safety",
        "Salary & benefits"
      ],
      height: 0
    };
  }

  componentDidUpdate() {
    const height = this.graphElement.clientHeight;
    console.log(height);
  }

  graphShow = (index, callback) => {
    this.setState((...prevState) => ({
      ...prevState,
      graph: {
        isDisplay: !prevState.isDisplay,
        number: index
      }
    }));
    return callback;
  };

  closeChart = () => {
    this.setState((...prevState)=>({
      ...prevState,
      graph: {
        isDisplay: !prevState.isDisplay,
      }
    }))
  }
  callback = () => {
    alert();
  };
  render() {
    const { companies } = this.state;
    return (
      <React.Fragment>
        <div className="kk-search text-center">
          <SearchContainer placeholder="Search by company name, industry or location" />
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
        <section id="companyDesc" className="company-desc pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2">
                    <div className="company-logo">
                      <img className="img-fluid" src={godrej} alt="Godrej" />
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
                        click={() => {}}
                      />
                      <Button
                        primary={false}
                        hasBorder
                        styleName="curved mb-4 mb-md-0"
                        click={() => {}}
                      >
                        <span>View Jobs(18)</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img
                    id="imgholder"
                    className="img-fluid"
                    src="https://picsum.photos/560/376/"
                    alt="carousel-item"
                  />
                </div>
                <Carousel option={option} onTranslated={onTranslated}>
                  <div className="item">
                    <img
                      src="https://picsum.photos/560/376/"
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://picsum.photos/560/376/?random"
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://picsum.photos/560/376/"
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://picsum.photos/560/376/?random"
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://picsum.photos/560/376/"
                      alt="carousel-item"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <SectionSpecificStickyHeader
                    targetSectionId="companyScore"
                    logo={godrej}
                    titleName="Godrej Consumer Product Limited"
                    buttonText="Talk to a Koolkanya"
          />
        </section>
        <section id="companyScore" className="kk-company-score kk-bg-light kk-main-section">
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
                  {/* {
                   this.state.personas.map((persona, index) => {
                      return(
                        <div key={index} style={{position: "static"}} className="col-sm-4">
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
                 }               */}
                  <div className="col-4">
                    <div
                      onClick={() => this.graphShow(0)}
                      className={this.state.graph.number === 0 ? "card kk-rating-card active": "card kk-rating-card"}
                    >
                      <div className="card-body d-flex flex-column">
                        <h2>4.5</h2>
                        <div className="progress">
                          <div
                            className="progress-bar kk-bg-success"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="card-text mt-auto">
                          <small className="text-muted">Culture</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      onClick={() => this.graphShow(1)}
                      className={this.state.graph.number === 1 ? "card kk-rating-card active": "card kk-rating-card"}
                    >
                      <div className="card-body d-flex flex-column">
                        <h2>3.2</h2>
                        <div className="progress">
                          <div
                            className="progress-bar kk-bg-warning"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="card-text mt-auto">
                          <small className="text-muted">
                            Female representatives
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      onClick={() => this.graphShow(2)}
                      className={this.state.graph.number === 2 ? "card kk-rating-card active": "card kk-rating-card"}
                    >
                      <div className="card-body d-flex flex-column">
                        <h2>1.5</h2>
                        <div className="progress">
                          <div
                            className="progress-bar kk-bg-danger"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="card-text mt-auto">
                          <small className="text-muted">
                            Learning opportunities
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/*graph column*/}
                  <div className="col-sm-12">
                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 0 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Culture</h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 1 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Female representatives</h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 2 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Learning opportunities</h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                  </div>

                  {/*graph row second*/}
                  <div className="col-sm-4">
                  <div
                    onClick={() => this.graphShow(3)}
                    className={this.state.graph.number === 3 ? "card kk-rating-card active": "card kk-rating-card"}
                  >
                    <div className="card-body d-flex flex-column">
                      <h2>4.5</h2>
                      <div className="progress">
                        <div
                          className="progress-bar kk-bg-success"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <p className="card-text mt-auto">
                        <small className="text-muted">Safety</small>
                      </p>
                    </div>
                  </div>
                </div>
                  <div className="col-sm-4">
                  <div
                    onClick={() => this.graphShow(4)}
                    className={this.state.graph.number === 4 ? "card kk-rating-card active": "card kk-rating-card"}
                  >
                    <div className="card-body d-flex flex-column">
                      <h2>4.0</h2>
                      <div className="progress">
                        <div
                          className="progress-bar kk-bg-success"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <p className="card-text mt-auto">
                        <small className="text-muted">Salary & benefits</small>
                      </p>
                    </div>
                  </div>
                </div>
                  <div className="col-sm-4">
                  <div
                    onClick={() => this.graphShow(5)}
                    className={this.state.graph.number === 5 ? "card kk-rating-card active": "card kk-rating-card"}
                  >
                    <div className="card-body d-flex flex-column">
                      <h2>3.5</h2>
                      <div className="progress">
                        <div
                          className="progress-bar kk-bg-warning"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <p className="card-text mt-auto">
                        <small className="text-muted">Maternity benefits</small>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12">
                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 3 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Maternity benefits</h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 4 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Safety</h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 5 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Salary & benefits</h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                  </div>      

                {/*graph row third*/}
                <div className="col-sm-4">
                  <div
                    onClick={() => this.graphShow(6)}
                    className={this.state.graph.number === 6 ? "card kk-rating-card active": "card kk-rating-card"}
                  >
                    <div className="card-body d-flex flex-column">
                      <h2>4.5</h2>
                      <div className="progress">
                        <div
                          className="progress-bar kk-bg-success"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <p className="card-text mt-auto">
                        <small className="text-muted">Work-life balance </small>
                      </p>
                    </div>
                  </div>
                </div>   
                <div className="col-sm-4">
                  <div
                    onClick={() => this.graphShow(7)}
                    className={this.state.graph.number === 7 ? "card kk-rating-card active": "card kk-rating-card"}
                  >
                    <div className="card-body d-flex flex-column">
                      <h2>4.5</h2>
                      <div className="progress">
                        <div
                          className="progress-bar kk-bg-success"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <p className="card-text mt-auto">
                        <small className="text-muted">Work satisfaction </small>
                      </p>
                    </div>
                  </div>
                </div>   

                 <div className="col-sm-12">
                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 6 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Work-life balance </h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {this.state.graph.isDisplay &&
                    this.state.graph.number === 7 ? (
                      <div
                        ref={this.graphElement}
                        className="kk-company-score-graph-wrap"
                      >
                        <div>
                          <div className={`kk-company-score-graph `}>
                            <button className="kk-company-score-graph-close" onClick={this.closeChart}><MdClose className="kk-close-icon"/></button>
                            <h4 className="kk-graph-title">Work satisfaction </h4>
                            <Bar className="mb-2" data={chartData} options={chartOptions} width="600" height="250"/>
                            <p>
                            Godrej encourages women staff to team up with male field area officers or sales managers to make sure we are safe during market visits. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                  </div>      

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
                    icon={
                      <FiChevronRight
                        className="icon"
                        click={() => {
                          console.log("clicked");
                        }}
                      />
                    }
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
                        icon={
                          <FiChevronRight className="icon" click={() => {}} />
                        }
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
                        icon={
                          <FiChevronRight className="icon" click={() => {}} />
                        }
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
                        icon={
                          <FiChevronRight className="icon" click={() => {}} />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-fluid text-center mt-5">
              <Button
                primary={false}
                hasBorder
                click={() => {}}
                styleName="curved"
              >
                <span>View All(18)</span>
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
