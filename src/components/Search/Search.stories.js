import React, { Component } from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean} from "@storybook/addon-knobs";
import Search from "./Search";

import 'bootstrap/dist/css/bootstrap.css';


storiesOf("Search", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ margin: 20}}>{story()}</div>)
  .add("Search", () => (
    <Search name={text('name', 'Company Search')} type={text('type', 'text')}
     value={text('value', 'company')}
     placeholder={text('placeholder', 'Type your keywords')}
     className={text('classname', 'kk-search')}/>
));

