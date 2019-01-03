import React, { Component } from 'react';

class CompanyInTopCitiesCard extends Component {
  render() {
    return (
      <div className="kk-company-card">
        <img className="kk-company-card__img" src={`${this.props.companyData.imgUrl}?random`} alt={this.props.companyData.companyName} />
        <div className="kk-company-card__title">{this.props.companyData.companyName}</div>
      </div>
    );
  }
}

export default CompanyInTopCitiesCard;
