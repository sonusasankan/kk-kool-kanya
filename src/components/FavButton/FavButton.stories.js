import React from "react";

import { storiesOf } from "@storybook/react";
import { action} from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import FavButton from "./FavButton";

import "../../style/icon.css";

storiesOf("Favourite Button", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ fontSize: 24, margin: 20 }}>{story()}</div>
  ))
  .add("Grey", () => (
    <FavButton onClick={action("clicked")} top={boolean("top", true)} grey={boolean("grey", true)} />
  ))
  .add("Red", () => (
    <FavButton
      right={boolean("right", true)}
      top={boolean("top", true)}
      red={boolean("red", true)}
    />
  ));
