import React, { Component } from "react";

import SearchContainer from "../components/Search/SearchContainer/SearchContainer";
import RecommendedCompanies from "../container/RecommendedCompanies";
import JobOpenings from "./Jobs/JobOpenings";
import { Button } from "../components/Button";
import Recommendation from "../components/Recommendation/Recommendation";
import { CompanyCard } from "./../components/CompanyCard";
import { JobPlainCard } from "./../components/JobPlainCard";

//badges
import {BadgeList} from './../components/Cards/Badge';


//images//
import homeBg from "../assets/images/home-bg.png";
import homeBg2x from "../assets/images/home-bg@2x.png";
import iconMouse from "../assets/images/ic-mouse.svg";
// import Browse from "../assets/images/ic-search.svg";
// import Score from "../assets/images/ic-koolkanya-score.svg";
// import ApplyJob from "../assets/images/ic-apply-job.svg";
// import TalkToKoolKanya from "../assets/images/ic-talk-to-koolkanya.jpg";
import Browse from '../assets/images/second-fold/ic-browse-companies-216.png';
import Score from '../assets/images/second-fold/ic-koolkanya-score-216.png';
import ApplyJob from '../assets/images/second-fold/ic-apply-job-216.png';
import TalkToKoolKanya from '../assets/images/second-fold/ic-talk-to-koolkanya-216.png';

import BgCircleElement from "../assets/images/bg-circle-element.svg";
import BgDotsElement from "../assets/images/bg-dots-element.svg";
import BgParallax1 from "../assets/images/home-bg-parallax-1.png";
import BgParallax2 from "../assets/images/home-bg-parallax-2.png";
import BgParallax3 from "../assets/images/home-bg-parallax-3.png";

//import carousel component
import Carousel from '../components/Carousel';

// importing onscroll from Interactions for interactions
import onAppear from '../Interactions/OnAppear';

//parallax plugin
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import {
  ArticleCard__Big,
  ArticleCard__Trending,
} from "../components/Article";
import SectionTitle from '../components/SectionTitle';

//external components
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

// for stores
import { connect } from "react-redux";
import { fetchCompanyLists } from "../store/actions/companyActions";

//importing all icons dynamically//
function importAll(r) {
  return r.keys().map(r);
}
const icons = importAll(
  require.context(
    "../assets/icons/home-industries",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

//components for SearchContainer//
const components = ["Companies", "Jobs", "Articles"];

const carouselOption = {
  // autoWidth: true,
  margin: 12,
  nav: false,
  dots: false,
  items: 1,
  stagePadding: 16,
  center: false,
  responsive: {
    400:{
      items: 1,
      stagePadding: 40,
    },
    576:{
      items: 2,
      stagePadding: 16
    },
    768:{
      items: 2,
      margin: 24
    },
    992:{
      items: 2,
      margin: 40,
      stagePadding: 24,
    },
    1200:{
      items: 3,
      margin: 40,
      stagePadding: 0,
      mouseDrag: false,
      touchDrag: false,
    }
  }
}



class Home extends Component {
  constructor() {
    super();
    this.state = {
      topIndustries: [
        "Advertising/ PR/ Events",
        "Architecture / Interior Designing",
        "BPOs / KPOs",
        "Banking / Finance Services /Insurance",
        "Courier / Logistics",
        "Education / Teaching",
        "FMGC",
        "Hospitals"
      ]
    };
  }



  componentDidMount() {
    this.props.dispatch(fetchCompanyLists());

    window.addEventListener('scroll', ()=>{
      document.querySelectorAll('.out-of-section').forEach(el=>{
        onAppear(el);
      });
    })
  } 
  render() {
    if(!this.props.companyList.items.companylist) {
      return (
        <h1>Loading...</h1>
      )
    }
    const companyList = this.props.companyList.items.companylist.slice(0,3).map(element => {
      return (
        <div className="item">
        <CompanyCard
          companyid={element._id}
          badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
          badgePosition="top left"
          locations={element.otherlocations.join(", ")}
          title={element.name}
          rating={element.ratings}
          industry={element.industry}
          openings="20"
          alt="office image"
          isFavourite={element.isFavourite}
        />
      </div>
      )
    })


    const { topIndustries } = this.state;
    return (
      <ParallaxProvider>
        <div className="kk-banner">
          <div className="row-fluid">
            <div className="kk-home-banner-content">
                <h1 className="kk-home-banner-header mb-0 mb-md-5">
                  Find a career that fits your needs
                </h1>
                <div className="kk-home-search-wrapper mt-3 mt-md-5" />
                <SearchContainer
                  components={components}
                  id="homeSearch"
                  placeholder="Search by company name, industry or location"
                />
              </div>

              <div id="kk-home-bg-img" className="kk-home-bg-img w-100">
                <img
                  className="img-fluid"
                  src={homeBg}
                  srcSet={homeBg2x}
                  alt="Home page banner image"
                  onLoad={(e)=>{
                      console.log(e.target.closest(".kk-home-bg-img").classList.add('img-loaded'))
                    }
                  }
                />
              </div>

              {/* parallax bg-1 */}
              <Parallax
              className="kk-home-bg-img--parallax-1"
              offsetYMax="40%"
              offsetYMin="-40%"
              slowerScrollRate={false}
              tag="figure"
              >
                <img className="img-fluid" src={BgParallax1} alt="decorative image" />
              </Parallax>

              {/* parallax bg-2 */}
              <Parallax
              className="kk-home-bg-img--parallax-2"
              offsetYMax="40%"
              offsetYMin="-40%"
              slowerScrollRate={false}
              tag="figure"
              >
                <img className="img-fluid" src={BgParallax2} alt="decorative image" />
              </Parallax>

              {/* parallax bg-3 */}
              <Parallax
              className="kk-home-bg-img--parallax-3"
              offsetYMax="40%"
              offsetYMin="-40%"
              slowerScrollRate={false}
              tag="figure"
              >
                <img className="img-fluid" src={BgParallax2} alt="decorative image" />
              </Parallax>

              {/* parallax bg-4 */}
              <Parallax
              className="kk-home-bg-img--parallax-4"
              offsetYMax="20%"
              offsetYMin="-20%"
              slowerScrollRate={false}
              tag="figure"
              >
                <img className="img-fluid" src={BgParallax2} alt="decorative image" />
              </Parallax>
              {/* parallax bg-5 */}
              <Parallax
              className="kk-home-bg-img--parallax-5"
              offsetYMax="-0%"
              offsetYMin="5%"
              slowerScrollRate={false}
              tag="figure"
              >
                <img className="img-fluid" src={BgParallax3} alt="decorative image" />
              </Parallax>


              <div onClick={()=>{
                document.body.parentElement.scrollTop = 600
              }} className="kk-home-scroll-icon-wrap">
                <img src={iconMouse} alt="Mouse icon" />
              </div>
            </div>
          </div>
        
        
        {/* <SearchContainer /> */}
        <section className="kk-section kk-home-illustrations">
          {/* parallax bg-5 */}
          <Parallax
            // className="kk-home-bg-img--parallax-5"
            className="kk-bg-element-circle"
            offsetYMax="-20%"
            offsetYMin="20%"
            slowerScrollRate={false}
            tag="figure"
          >
            <img className="img-fluid" src={BgCircleElement} alt="decorative image" />
          </Parallax>
          <div className="container">
          <SectionTitle>We are here to help</SectionTitle>
            <div className="kk-home-illustration__outer-wrapper">
              <div>
                <Link className="d-flex text-center text-md-left flex-column" to="/jobs">
                  <div className="kk-home-illustration__wrapper">
                    <img className="kk-home-illustration out-of-section w-100" src={Browse} alt="An illustration with lense icon" />
                    {/* <Search fill="violet"/> */}
                    <h4 className="kk-home-illustration-header kk-color-black">Browse Companies</h4>
                    <p>Understand what companies fit your lifestyle </p>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="d-flex text-center text-md-left flex-column" to="/company-description">
                <div className="kk-home-illustration__wrapper">
                  <img className="kk-home-illustration out-of-section w-100" src={Score} alt="Icon of Score card" />
                  <h4 className="kk-home-illustration-header kk-color-black">
                    Check out the Kool Kanya Score
                  </h4>
                  <p>Learn if the company matches up to your requirements </p>
                </div>
                </Link>
              </div>
              <div>
                <Link className="d-flex text-center text-md-left flex-column" to="/company-description">
                  <div className="kk-home-illustration__wrapper ">
                    <img className="kk-home-illustration out-of-section w-100"
                      src={TalkToKoolKanya}
                      alt="Lady working working with laptop"
                    />
                    <h4 className="kk-home-illustration-header kk-color-black">Talk to a Kool Kanya</h4>
                    <p>
                      Still have questions? Get answers from a woman that 
                      currently …
                    </p>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="d-flex text-center text-md-left flex-column" to="/jobs">
                  <div className="kk-home-illustration__wrapper">
                    <img className="kk-home-illustration out-of-section w-100" src={ApplyJob} alt="An illustration of Suit case" />
                    <h4 className="kk-home-illustration-header kk-color-black">
                      View and apply for Jobs
                    </h4>
                    <p>View the jobs the companies have and apply</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="kk-bg-element-dots">
          <img src={BgDotsElement} alt="" />
        </div>
        <section className="kk-section kk-home__top__companies bg-light">
          <div className="container">
            <SectionTitle    
              className="kk-home__top-companies__section"          
              link="/compan-search-results"
              linkText="View All"
            >Top companies fitting your requirements</SectionTitle>
            <div className="row">
              <div className="col-md-3">
                {/* <Recommendation personas = { this.props.companyList.items.filter.personas } /> */}
                <Recommendation 
                  list = { ["Culture", "Female Representatives & Opportunities", "Learning Opportunities", "Maternity Benefits", "Safety", "Salary & Benefits", "Work-life Balance", "Work Satisfaction"] } />
              </div>
              <div className="col-md-9 kk-home__carousel__wrapper">
                <Carousel className="kk-home__carousel" option={carouselOption}>
                  { companyList }
                </Carousel>
                <div className="text-center mt-3 mt-md-0">
                <Link to="/companies" className="kk-home__carousel__view-all d-md-none">
                  <Button styleName="curved" primary={false} hasBorder label="View All (20+)"/>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="kk-section">
          <div className="container">
          <SectionTitle
              link="/jobs"
              linkText="View All"
            >Job openings in top industries</SectionTitle>
            <div className="row">
              {topIndustries.map((industry, index) => {
                return (
                  <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3 kk-JobPlainCard out-of-section">
                    <JobPlainCard industry={industry} logo={icons[index]} link="/jobs" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-light kk-home-article-section">
        <Parallax
            // className="kk-home-bg-img--parallax-5"
            className="kk-bg-element-circle top0"
            offsetYMax="-20%"
            offsetYMin="20%"
            slowerScrollRate={false}
            tag="figure"
          >
            <img className="img-fluid" src={BgCircleElement} alt="decorative image" />
          </Parallax>
          {/* <div className="kk-bg-element-circle top0">
            <img src={BgCircleElement} alt="" />
          </div> */}
          <div className="container">
          <SectionTitle
              link="/article-search"
              linkText="View All"
            >Trending articles</SectionTitle>
            <div className="row">
              <div className="col-lg-6">
                <ArticleCard__Big
                  cardLink="article-details"
                  imgSrc="https://loremflickr.com/560/242"
                  alt="Alternate text for image"
                  cardTitle="Tech Companies Are Getting Free Work Out of Job Applicants"
                  authorName="By Sheeba Chaudhary"
                  readingTime="7 min read"
                  description="The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours."
                />
              </div>
              <div className="col-lg-6">
                <ArticleCard__Trending
                  cardLink="article-details"
                  imgSrc="https://loremflickr.com/160/210"
                  favButton
                  alt="Alternate text for image"
                  cardTitle="Tools I use to learn, work and travel anywhereTools I use to learn, work and travel anywhereTools I use to learn, work and travel anywhere Tools I use to learn, work and travel anywhereTools I use to learn, work and travel anywhereTools I use to learn, work and travel anywhere  "
                  authorName="By Sheeba Chaddha"
                  readingTime="7 min read"
                  description="The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours."
                />
                <ArticleCard__Trending
                  cardLink="article-details"
                  imgSrc="https://loremflickr.com/160/210"
                  favButton
                  alt="Alternate text for image"
                  cardTitle="For those who stand in the rain because you don’t trust the sun"
                  authorName="By Sheeba Chaddha"
                  readingTime="7 min read"
                  description="The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours."
                />
              </div>
            </div>
          </div>
        </section>
      </ParallaxProvider>
    );
  }
}


const mapStateToProps = state => ({
  companyList : state.companyList
});

export default connect(mapStateToProps)(Home);