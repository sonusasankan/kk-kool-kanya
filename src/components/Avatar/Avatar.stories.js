import React from "react";
import { MemoryRouter } from 'react-router';

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text} from "@storybook/addon-knobs";

import  Avatar    from "./Avatar";
//  importing image
import imgSrc from '../../assets/images/avatar.jpg';
import defaultAvatar from '../../assets/images/avatar.png';

storiesOf("Avatar", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/']}><div style={{margin: 20}}>{story()}</div></MemoryRouter>
))
  .addDecorator(withKnobs)
  .add("Placeholder", () => (
    <Avatar avatarTitle={text('avatarTitle', 'User name')} link={text('link', '/')} imgSrc={text('imgSrc', imgSrc)} isLoggedIn={boolean("isLoggedIn", true)}/>
  ))
