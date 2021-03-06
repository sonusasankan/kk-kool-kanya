import React, { Component } from "react";

import Dropdown from '../components/Dropdown';
import Filter from '../components/Filters';
import {FilterWrapperOuter, SortingWrapperMobile} from './CompanySearch_style';

//global components//
import BreadCrumb from "../components/BreadCrumb";
import { Button } from "../components/Button";
import { CompanyCard } from "../components/CompanyCard";
import SearchContainer from "../components/Search/SearchContainer"
import { Chip } from "./../components/Chips";

//external components//
import { FiChevronDown } from "react-icons/fi";
import {IoIosClose} from 'react-icons/io';

//images//
import companyImage from "../assets/images/img-company-descrition-1.jpg";

// for stores
import { connect } from "react-redux";
import { fetchCompanyLists } from "./../store/actions/companyActions";

class CompanySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _openSortFilters(){
    document.querySelector('.kk-sort-filters').classList.add('show');
  }
  _closeSortFilters(){
    document.querySelector('.kk-sort-filters').classList.remove('show');
  }
  _openFilters(){
    console.log('heheeh');
    if(document.querySelector('.kk-sort-filters').classList.contains('show')){
      document.querySelector('.kk-sort-filters').classList.remove('show');
    }

    document.querySelector('#kk-filter-wrapper-outer').classList.toggle('show');
  }
  _closeFilters(){
    document.querySelector('#root').classList.remove('no-scroll');

    document.querySelector('#kk-filter-wrapper-outer').classList.toggle('show');
  }

  componentWillMount() {
    this.props.dispatch(fetchCompanyLists());
  }

  displayCompanies = () =>{
    return(
      this.props.companyList.items.companylist.slice(0,6).map(company => {
        return (
          <div className="col-md-4">
            <CompanyCard
              locations={company.otherlocations.join(",")}
              title={company.name}
              img={company.img}
              alt="img alt"
              industry="IT"
              openings="23"
              rating="4.5"
            />
          </div>
        );
      })
    )
  }

 
  render() {
    if(!this.props.companyList.items.companylist) {
      return (
        <h1>Loading...</h1>
      )
    }

    let filters = [
      {inputType: "checkbox", category: "Industry", item: ["Fashion Design","Advertising","UX Design","UI Design","Cooking","People Management"]},
      {inputType: "checkbox", category: "Location", item: ["Bengaluru","Pune","Punjab","Maharastra","Shimla","Mughalsarai","Kerela","Chattisgarh"]},
      {inputType: "checkbox", category: "KoolKanya Rating", item: ["4.5 & above","3.5 & above","2.5 & above"]},
      {inputType: "checkbox", category: "Job Posted Date", item: ["Any","This Week","This Month","Last 6 Months"]},
      {inputType: "range", category: "Work Experience", min: 0, max: 4},
      {inputType: "checkbox", category: "Job Type", item: ["Internship","Full Time"," Freelance"]},
    ];
    return (
      <React.Fragment>
        <div className="kk-search text-center">
            <SearchContainer placeholder="Search by company name, industry or location"/>
        </div>
        <section className="kk-breadcrumb py-0 d-none d-md-block">
          <div className="container">
            <BreadCrumb>
              <li>Home</li>
              <li>Companies</li>
              <li>fashion Design in pune</li>
            </BreadCrumb>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row-fluid mb-2 mb-md-5 d-none d-md-block">
              <h4 className="kk-section-title">
                Fashion Design in Pune{" "}
                <span className="kk-text-small-light"> - 48 companies found</span>
              </h4>
            </div>
            <div className="row">
              <div className="col-md-3 border-right">
              <div className="row-fluid">
                <FilterWrapperOuter id="kk-filter-wrapper-outer">
                  <Filter filters={filters} />
                  <div className="kk-filter-wrapper-buttons d-md-none">
                    <button className="w-50" onClick={this._closeFilters}>Cancel</button>
                    <button className="w-50 dark" onClick={this._closeFilters}>Apply</button>
                  </div>
                </FilterWrapperOuter>
              </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-12 d-md-none px-0">
                    <div className="row mx-0">
                      <div className="col-6 px-0">
                        <button className="w-100 kk-filter__cta" onClick={this._openFilters}>Filter</button>
                      </div>
                      <div className="col-6 px-0">
                        <button className="w-100 kk-filter__cta" onClick={this._openSortFilters}>Sort</button>
                        <SortingWrapperMobile className="kk-sort-filters d-md-none">
                          <div className="kk-sort-filters__bg" onClick={this._closeSortFilters}></div>
                          <ul>
                            <li onClick={this._closeSortFilters}>Popularity</li>
                            <li onClick={this._closeSortFilters}>Relevance</li>
                            <li onClick={this._closeSortFilters}>Latest</li>
                          </ul>
                        </SortingWrapperMobile>
                      </div>
                    </div>
                    <div className="d-md-none kk-filter-head__item-count mt-0 mb-3">Showing 158 results</div>
                  </div>
                  <div className="d-none d-md-flex w-100 justify-content-center mb-3">
                    <div className="mr-auto ml-3"><Chip title="Delhi" close={<IoIosClose className="icon"/>}/></div>
                    <div className="d-flex align-items-center">
                    <div className="mr-2">Sort</div>
                    <Dropdown
                        options={['Latest', 'Popularity', 'Recommended']}
                        onSelect={console.log(this)}
                        defualtOption="Recommended"
                    />
                    </div>
                  </div>
                    
                  {
                    this.displayCompanies()
                  //   this.props.companyList.items.companylist.slice(0,6).map(company => {
                  //   return (
                  //     <div className="col-md-4">
                  //       <CompanyCard
                  //         locations={company.otherlocations.join(",")}
                  //         title={company.name}
                  //         img={company.img}
                  //         alt="img alt"
                  //         industry="IT"
                  //         openings="23"
                  //         rating="4.5"
                  //       />
                  //     </div>
                  //   );
                  // })
                  }
                </div>
              </div>
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

export default connect(mapStateToProps)(CompanySearch);
