import React from "react";
import { MemoryRouter } from "react-router";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import JobCard from "./JobCard";

import Logo from "../../assets/images/godrej.png";

// import "../../style/icon.scss";


storiesOf("Job Card", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}><div className="m-5">{story()}</div></MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add("Card", () => (
    <JobCard
      jobTitle={text("jobTitle", "UX Designer")}
      companyLogo={text('companyLogo', Logo)}
      location={text('location', "Bengaluru")}
      experienceRequired={text('experiencerequired', '2+ years')}
      typeOfJob={text('typeofJob', 'Full Time')}
      postedOn={text('postedOn', 'Posted 3 weeks ago')}
      detailLink="/job-description"
    />
  ));
