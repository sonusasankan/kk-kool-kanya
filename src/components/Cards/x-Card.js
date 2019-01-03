import React from "react";

import {
  CardWrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardDetails
} from "./index";

import Logo from "../../assets/images/godrej.png";

const Card = () => (
  <CardWrapper cardType="card__company">
    <CardImage
      src="https://loremflickr.com/260/220"
      alt="Alternate text for image"
    />
    <CardBody>
      <CardTitle
        // icon="icon-ic-job-24"
        logo={Logo}
        rating="4.2"
      >
        Godrej Consumer Products Ltd
      </CardTitle>
      <CardDetails icon="icon-ic-location-24">
        Bengaluru, Delhi, Hyderabad
      </CardDetails>
      <CardDetails icon="icon-ic-industry-24">Interaction Design</CardDetails>
      <CardDetails icon="icon-ic-job-24">100 Job Openings</CardDetails>
    </CardBody>
  </CardWrapper>
);
export default Card;
