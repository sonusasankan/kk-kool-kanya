import React, {Component} from "react";
import { PropTypes } from "prop-types";
import { Card, CardBadge, CardImage, CardBody, CardTitle, CardDetails, CardHead, CardLogo, CardRating } from "../Cards";
import FavButton from '../FavButton';

import Logo from '../../assets/images/godrej.png'
import DummyImage from "../../assets/images/img-company-descrition-1.jpg";

// REDUX THINGY
import { connect } from "react-redux";
import { markFavouriteCompany } from "../../store/actions/companyActions";

class CompanyCard extends Component {
  constructor() {
    super()
  }
  markFavourite = () => {
    this.props.markFavourite((this.props.companyid))
  }
  render() {
    var {numberOfBadges, img, alt, title, locations, industry, openings, logo, rating, isFavourite } = this.props
    return (
      <Card cardType="card__company">
        {numberOfBadges ? <CardBadge numberOfBadges={numberOfBadges} /> : ""}
        <FavButton top right isFavourite markFavourite={ this.markFavourite }/>
        <CardImage src={img} alt={alt} />
        <CardHead>
          <CardLogo src={logo} alt="Godrej Logo" />
          <CardTitle>
            {title}
          </CardTitle>
          <CardRating>
            {rating}
          </CardRating>
        </CardHead>
        <CardBody styleName="kk-card-body-custom">
          <CardDetails icon="icon-ic-location-24">{locations}</CardDetails>
          <CardDetails icon="icon-ic-industry-24">{industry}</CardDetails>
          <CardDetails icon="icon-ic-job-24">{openings} Job Openings</CardDetails>
        </CardBody>
      </Card>
    );
};
}
CompanyCard.defaultProps =  {
  logo: Logo,
  img: DummyImage
}

CompanyCard.propTypes = {
  img: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  locations: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  industry: PropTypes.string.isRequired,
  openings: PropTypes.string.isRequired
};



const mapDispatchToProps = (dispatch) => {
  return {
    markFavourite: (id) => { dispatch(markFavouriteCompany(id)) }
  }
}

export default connect(null, mapDispatchToProps)(CompanyCard);
