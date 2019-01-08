import React, { Component } from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean} from "@storybook/addon-knobs";
import Chip from "./Chip";

import dummyIcon from "../../assets/images/location-grey.svg";
import bangalore from "../../assets/images/location.svg";

import 'bootstrap/dist/css/bootstrap.css';


storiesOf("Chip", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ margin: 20}}>{story()}</div>)
  .add("Chip", () => (
    <Chip isActive={boolean('isActive', false)} logo={text('logo', bangalore)} title={text('title','Bangalore')}/>
));

