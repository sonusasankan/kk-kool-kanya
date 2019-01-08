import React from "react";
import { MemoryRouter } from "react-router";

import { storiesOf } from "@storybook/react";
import { action} from "@storybook/addon-actions";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import JobPlainCard from "./JobPlainCard";

import "../../style/icon.css";
import icon from "../../assets/images/location-grey.svg";

storiesOf("Job Plain Card", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}><div className="col-md-3 m-3 text-center">{story()}</div></MemoryRouter>
  ))
  .add("Job Card", () => (
      <JobPlainCard openings={number('openings', 50)} industry={text('industry', 'Real Estate')}logo={text('logo', icon)}/>
  ))

