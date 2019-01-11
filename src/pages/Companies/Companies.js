import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  Card,
  CardImage,
  CardBody,
  CardBadge,
  CardTitle,
  CardDetails,
  CardFavButton,
  CardLogo,
  CardHead,
  CardRating
} from "../../components/Cards";
import { Button } from "../../components/Button";
import { FiChevronRight } from "react-icons/fi";
import { Chip } from "../../components/Chips";
import FavButton from "../../components/FavButton";
import SearchContainer from './../../components/Search/SearchContainer';
import {BadgeList} from '../../components/Cards/Badge';
import { CompanyCard } from "./../../components/CompanyCard";
import HorizontalScrollableTags from '../../container/HorizontalScrollableTags';
import SectionTitle from '../../components/SectionTitle';
import { JobPlainCard } from "../../components/JobPlainCard";


import Recommendation from "./../../components/Recommendation/Recommendation";
import Logo from "../../assets/images/godrej.png";
import bangalore from "../../assets/images/location.svg";
import dummyIcon from "../../assets/images/location-grey.svg";
import dummyImage from "../../assets/images/img-company-descrition-1.jpg";

// for stores
import { connect } from "react-redux";
import { fetchCompanyLists } from "../../store/actions/companyActions";

//importing all icons dynamically//
function importAll(r) {
  return r.keys().map(r);
}
const icons = importAll(
  require.context(
    "../../assets/icons/home-industries",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const list = [
  <Chip isActive logo={bangalore} alt="bangalore logo" title="Delhi" />,
  <Chip logo={bangalore} alt="bangalore logo" title="Bangalore" />,
  <Chip logo={bangalore} alt="bangalore logo" title="Chennai" />,
  <Chip logo={bangalore} alt="bangalore logo" title="Mumbai" />,
  <Chip logo={bangalore} alt="bangalore logo" title="Bangalore" />,
  <Chip logo={bangalore} alt="bangalore logo" title="Pune" />,
];

class Companies extends Component {
  constructor(props) {
    super();
    this.button = React.createRef();
    this.state = {
      cities: [],
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

  routeChange = e => {
    e.stopPropagation()
    if(e.target.localName !== 'button'){
         let path = `company-description`;
        this.props.history.push(path);
    }
  };

  componentWillMount() {
    this.props.dispatch(fetchCompanyLists());
  }
  
  render() {
    if(!this.props.companyList.items.companylist) {
      return (
        <h1>Loading...</h1>
      )
    }

    // console.log(this.props);

    let companyList = this.props.companyList.items.companylist
    let locations = ["Kochi"];
    let loc = [];
    companyList.map(company => {
        loc.push(...company.otherlocations);
     });

      locations = [...new Set(loc)];
    

    return (
      <React.Fragment>
        <div className="kk-search text-center">
            <SearchContainer id="companySearch" placeholder="Search by company name, industry or location"/>
        </div>
        <section className="kk-companies-listing">
          <div className="container">
            <div className="kk-section-header d-flex align-items-center flex-column flex-md-row justify-content-md-between mb-4 mt-4 mb-md-4">
              <h3 className="kk-section-title my-auto">
                Top companies recommended for
              </h3>
              <Button
                styleName="d-none d-md-block"
                primary={false}
                isAlignRight={true}
                label="View all"
                click={()=>{ this.props.history.push('company-search-results');}}
                icon={<FiChevronRight className="icon" />}
              />
            </div>
            <div className="row">
              <div className="col-md-3">
                <Recommendation 
                  // personas = { this.props.companyList.items.filter.personas } 
                  list = { ["Culture", "Female Representatives & Opportunities", "Learning Opportunities", "Maternity Benefits", "Safety", "Salary & Benefits", "Work-life Balance", "Work Satisfaction"] }
                  />
              </div>
              <div className="col-md-9">
                <div className="row">
                  {companyList.map((company, index) => {
                    if (index < 6) {
                      return (
                        <div
                          onClick={this.routeChange}
                          key={company.id}
                          className="col-md-4"
                        >
                          <CompanyCard
                            badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                            badgePosition="top left"
                            locations={company.otherlocations.join(", ")}
                            title={company.name + `this will be next line, and some times third`}
                            // rating={company.rating % 1 !== 0? company.rating: company.rating + ".0"}
                            rating={company.rating % 1 !== 0? company.rating: company.rating + ".0"}
                            industry={company.industry}
                            openings={company.totalOpenings}
                            img={dummyImage}
                            alt="office image"
                            isFavourite={company.isFavourite}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="kk-recommended-companies">
          <div className="container">
            <div className="row-fluid d-flex justify-content-between mb-2 mb-md-4">
              <h3 className="kk-section-title my-auto">
               Recommended companies in top cities
              </h3>
              <Button
                styleName="d-none d-md-block"
                primary={false}
                isAlignRight={true}
                label="View all"
                click={()=>{this.props.history.push('company-search-results');}}
                icon={<FiChevronRight className="icon" />}
              />
            </div>
            <div className="row">
              <div className="col-md-12">
              <HorizontalScrollableTags list={list}/>
              </div>
            </div>
            <div className="row my-4">
              {companyList.map((company, index) => {
                if(index < 6){
                  return (
                    <div className="col-md-4 kk-card-small">
                      <Card link="company-description" cardType="card__company">
                        <CardBody>
                          <FavButton grey top right />
                          <CardDetails>
                            <div className="d-flex">
                              <CardLogo src={Logo} />
                              <div>
                                <h6>{company.name} An some text will also comes here</h6>
                                {/* <span className="kk-rating-numbber d-flex justify-content-center">{company.rating % 1 !== 0? company.rating: company.rating + ".0"}</span> */}
                                <span className="kk-rating-numbber d-flex justify-content-center">4.5</span>
                              </div>
                            </div>
                          </CardDetails>
                        </CardBody>
                      </Card>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
        <section className="kk-top-industries">
          <div className="container">
          <SectionTitle
              link="/jobs"
              linkText="View All"
            >Top industries</SectionTitle>
            <div className="row">
              {this.state.topIndustries.map((industry, index) => {
                return (
                  <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <JobPlainCard industry={industry} logo={icons[index]} link="/jobs" />
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

const mapStateToProps = state => ({
companyList : state.companyList
});

export default withRouter(connect(mapStateToProps)(Companies));