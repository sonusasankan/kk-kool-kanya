import React, { Component } from "react";

import Dropdown from '../../components/Dropdown';
import Filter from '../../components/Filters';
import {FilterWrapperOuter, SortingWrapperMobile} from '.././CompanySearch_style';
import {JobLandingWrapper, JobCardWrapper} from './JobLanding__style';

//global components//
import BreadCrumb from "../../components/BreadCrumb";
import JobCard  from "../../components/Jobs";
import SearchContainer from "../../components/Search/SearchContainer";

// dummy company logo
import Logo from "../../assets/images/godrej.png";

export default class JobLanding extends Component {

  _openSortFilters(){
    document.querySelector('.kk-sort-filters').classList.add('show');
  }
  _closeSortFilters(){
    document.querySelector('.kk-sort-filters').classList.remove('show');
  }
  _openFilters(){

    if(document.querySelector('.kk-sort-filters').classList.contains('show')){
      document.querySelector('.kk-sort-filters').classList.remove('show');
    }

    document.querySelector('#kk-filter-wrapper-outer').classList.toggle('show');
    document.querySelector('.kk-header').classList.add('down');
  }
  _closeFilters(){
    document.querySelector('#kk-filter-wrapper-outer').classList.toggle('show');
    document.querySelector('.kk-header').classList.remove('down');
  }
  render() {
    let filters = [
      {inputType: "checkbox", category: "Industry", item: ["Fashion Design","Advertising","UX Design","UI Design","Cooking","People Management"]},
      {inputType: "checkbox", category: "Location", item: ["Bengaluru","Pune","Punjab","Maharastra","Shimla","Mughalsarai","Kerela","Chattisgarh"]},
      {inputType: "checkbox", category: "KoolKanya Rating", item: ["4.5 & above","3.5 & above","2.5 & above"]},
      {inputType: "checkbox", category: "Job Posted Date", item: ["Any","This Week","This Month","Last 6 Months"]},
      {inputType: "range", category: "Work Experience", min: 0, max: 4},
      {inputType: "checkbox", category: "Job Type", item: ["Internship","Full Time"," Freelance"]},
    ];
    return (
      <JobLandingWrapper>
        <div className="kk-search text-center">
            <SearchContainer placeholder="Search by job, industry or location"/>
        </div>
        <section className="kk-breadcrumb py-0 d-none d-md-block">
          <div className="container">
            <BreadCrumb>
              <li>Home</li>
              <li>Jobs</li>
              <li>UX Designer</li>
            </BreadCrumb>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row-fluid mb-2 mb-md-5 d-none d-md-block">
              <h4 className="kk-section-title">
                Jobs{" "}
                <span className="kk-text-small-light"> - 108 Jobs found</span>
              </h4>
            </div>
            <div className="row">
              <div className="col-md-3">
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
                    <div className="d-md-none kk-filter-head__item-count mt-0 mb-6">Showing 158 results</div>
                  </div>
                  <div className="d-none d-md-flex justify-content-end w-100 mb-3">
                    <div className="mr-2">Sort</div>
                    <Dropdown
                        options={['Latest', 'Popularity', 'Recommended']}
                        onSelect={console.log(this)}
                        defualtOption="Recommended"
                    />
                  </div>

                  <div className="col-md-12 border-top kk-md-border-left pt-4">
                    <row>
                      <div className="row">
                        <div className="col-12">
                          <JobCardWrapper>
                            <JobCard
                              companyLogo={Logo}
                              jobTitle="UI/UX Designer"
                              location="Bengaluru"
                              experienceRequired="2+ years"
                              typeOfJob="Full Time"
                              postedOn="Posted 3 weeks ago"
                              detailLink="/job-description"
                            />
                          </JobCardWrapper>
                        </div>
                        <div className="col-12">
                          <JobCardWrapper>
                            <JobCard
                              companyLogo={Logo}
                              jobTitle="UI/UX Designer"
                              location="Bengaluru"
                              experienceRequired="2+ years"
                              typeOfJob="Full Time"
                              postedOn="Posted 3 weeks ago"
                              detailLink="/job-description"
                            />
                          </JobCardWrapper>
                        </div>
                        <div className="col-12">
                          <JobCardWrapper>
                            <JobCard
                              companyLogo={Logo}
                              jobTitle="UI/UX Designer"
                              location="Bengaluru"
                              experienceRequired="2+ years"
                              typeOfJob="Full Time"
                              postedOn="Posted 3 weeks ago"
                              detailLink="/job-description"
                            />
                          </JobCardWrapper>
                        </div>
                        <div className="col-12">
                          <JobCardWrapper>
                            <JobCard
                              companyLogo={Logo}
                              jobTitle="UI/UX Designer"
                              location="Bengaluru"
                              experienceRequired="2+ years"
                              typeOfJob="Full Time"
                              postedOn="Posted 3 weeks ago"
                              detailLink="/job-description"
                            />
                          </JobCardWrapper>
                        </div>
                        <div className="col-12">
                          <JobCardWrapper>
                            <JobCard
                              companyLogo={Logo}
                              jobTitle="UI/UX Designer"
                              location="Bengaluru"
                              experienceRequired="2+ years"
                              typeOfJob="Full Time"
                              postedOn="Posted 3 weeks ago"
                              detailLink="/job-description"
                            />
                          </JobCardWrapper>
                        </div>
                        <div className="col-12">
                          <JobCardWrapper>
                            <JobCard
                              companyLogo={Logo}
                              jobTitle="UI/UX Designer"
                              location="Bengaluru"
                              experienceRequired="2+ years"
                              typeOfJob="Full Time"
                              postedOn="Posted 3 weeks ago"
                              detailLink="/job-description"
                            />
                          </JobCardWrapper>
                        </div>
                      </div>
                    </row>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </JobLandingWrapper>
    );
  }
}