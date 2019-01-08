import React from "react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import CompanyCard from "./CompanyCard";

import DummyImage from "../../assets/images/img-company-descrition-1.jpg";


// import "../../style/icon.scss";

import store from "../../store/store";

storiesOf("Company Card", module)
  .addDecorator(story => <Provider store={store}><div className="col-md-4 m-3">{story()}</div></Provider>)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add("Card", () => <CompanyCard industry={text('industry', 'Information technology')} img={text('img', DummyImage )} rating={number('rating', 4.5)} locations={text('locations', 'Bangalore, Delhi, Mumbai')} title={text("title", "Google")} />);
