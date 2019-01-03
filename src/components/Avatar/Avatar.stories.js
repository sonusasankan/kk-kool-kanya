import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, } from "@storybook/addon-knobs";

import  Avatar    from "./Avatar";
//  importing image
import imgSrc from '../../assets/images/avatar.jpg';
import defaultAvatar from '../../assets/images/avatar.png';

storiesOf("Avatar", module)
  .addDecorator(withKnobs)
  .add("Placeholder", () => (
    <Avatar isLoggedIn={boolean("isLoggedIn", true)}/>
  ))
