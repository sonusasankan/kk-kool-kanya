import React from "react";
import { MemoryRouter } from "react-router";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import SectionTitle from "./SectionTitle";

import "../../style/icon.css";
import icon from "../../assets/images/location-grey.svg";

storiesOf("SectionTitle", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      <div className="col-md-3 m-3 text-center">{story()}</div>
    </MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <SectionTitle
      link={text("link", "/")}
      children={text("Children", "Section title")}
      linkText={text('linkText', 'View All')}
    />
  ));
