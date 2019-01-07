import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs} from "@storybook/addon-knobs";
import BreadCrumb from "./BreadCrumb";

storiesOf("BreadCrumb", module)
  .addDecorator(withKnobs)
  .add("Primary", () => (
    <BreadCrumb>
      <ul>
        <li>Home</li>
        <li>Jobs</li>
        <li>UX Designer</li>
      </ul>
    </BreadCrumb>
  ));
