import React, { Component } from 'react';

import CompanyListComponent from './companyListComponent';
import CompanyInTopCitiesCard from './companyInTopCitiesCard';


class CompaniesInTopCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [], // contains list of cities extracted from recieved data
      companies: [], // arrays of companies details
      selectedCity: '', // city selected by user
    };
  }

  selectNewCity(city) { // select a new state for company cards
    this.setState({
      selectedCity: city,
    });
  }

  componentDidMount() {
    // fetching company details
    fetch('/api/top-8-comapnies-in-cities') // fetching comapny details
      .then(res => res.json())
      .then((res) => {
        const uniqueCities = []; // empty array to collect city names
        res.forEach((city) => {
          if (uniqueCities.indexOf({ cityName: city.cityName, imgUrl: city.imgUrl })) {
            uniqueCities.push({ cityName: city.cityName, imgUrl: city.imgUrl }); // collecting city names in an array;
          }
        });
        uniqueCities.sort(); // sorting city array accroding to alphabet

        this.setState({
          cities: uniqueCities,
          selectedCity: uniqueCities[0].cityName,
          companies: res,
        });
      });
  }

  render() {
    const cityList = this.state.cities.map((city, index) => (
      <CompanyListComponent
        cityData={city}
        selectedCity={this.state.selectedCity}
        clickHandler={this.selectNewCity.bind(this)}
        key={index}
      />
    ));

    let length = 0;

    const companyList = this.state.companies.map((company) => {
      let list = [];
      if (company.cityName === this.state.selectedCity) {
        length = company.companies.length;

        let count = 0;
        list = company.companies.sort((a, b) => b.rating - a.rating).map((company, index) => { // creating company cards
          if (count < 8) {
            count++;
            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <CompanyInTopCitiesCard
                  companyData={company}
                />
              </div>
            );
          }
          return (
            <React.Fragment key={index}></React.Fragment>
          );
        });
        return list;
      }
      return list;
    });

    return (
      <section className="container">
        <h2 className="text-center">Companies in top cities</h2>
        <br />
        <div className="row">
          <div className="col-12 col-md-4 col-lg-2">{cityList}</div>
          <div className="col-12 col-md-8 col-lg-10">
            <div className="row">
              {companyList}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="kk-company-card justify-content-center kk-show-all">
                  <div className="text-center">
Show All
                    {length}
                    {' '}
Companies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompaniesInTopCities;
