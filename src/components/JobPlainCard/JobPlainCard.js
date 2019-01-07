import React from "react";

import { Card, CardBody, CardLogo, CardDetails } from "../Cards";

import icon from "../../assets/images/location-grey.svg";
import { PropTypes } from "prop-types";

const JobPlainCard = ({ logo, industry, openings, link }) => {
  return (
    <Card cardType="kk-job-plain-card" link={link}>
      <CardBody>
        <div className="kk-logo-crcle-wrapper text-center my-3">
          <img src={logo} alt="industry logo" />
        </div>
        <h5 className="text-center kk-color-black">{industry}</h5>
        <CardDetails center={true}>
          <p style={{ "fontSize": 16 }}>{openings} Openings</p>
        </CardDetails>
      </CardBody>
    </Card>
  );
};

JobPlainCard.defaultProps = {
  logo: icon,
  industry: "Information technology",
  openings: 20
};
JobPlainCard.propTypes = {
  logo: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  openings: PropTypes.number.isRequired
};

export default JobPlainCard;
