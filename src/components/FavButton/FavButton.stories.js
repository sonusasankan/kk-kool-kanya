import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text} from "@storybook/addon-knobs";
import FavButton from "./FavButton";

// import "../../style/icon.scss";

storiesOf("Favourite Button", module)
.addDecorator(withKnobs)
.add("Primary", () => (
    <FavButton grey={boolean("grey", true)}/>
))