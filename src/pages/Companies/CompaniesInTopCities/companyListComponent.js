import React, { Component } from 'react';

class CompanyListComponent extends Component {
  render() {
    const cityName = this.props.cityData.cityName;
    const imgUrl = `${this.props.cityData.imgUrl}?random`;

    return (
      <div
        className={`kk-city-list-item ${cityName === this.props.selectedCity ? 'active' : ''}`}
        onClick={this.props.clickHandler.bind(this, cityName)}
      >
        <img className="kk-city-icon" src={`${imgUrl}?random`} alt={cityName} />
        <div className="kk-city-name">{cityName}</div>
      </div>
    );
  }
}

export default CompanyListComponent;
