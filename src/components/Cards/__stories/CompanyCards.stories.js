import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router';

import { storiesOf } from '@storybook/react';
import Logo from '../../../assets/images/godrej.png';
import 'bootstrap/dist/css/bootstrap-grid.css';
// import Logo from '../assets/images/godrej.png';

import {
  Card,
  CardBadge,
  CardButtonGroup,
  CardImage,
  CardBody,
  CardFavButton,
  CardHead,
  CardLogo,
  CardTitle,
  CardDetails,
  CardRating,
} from '..';
import { Button } from '../../Button';

const Wrapper = styled.div`
    max-width: ${props=>(props.small ? "350px" : "260px")};
`;

storiesOf('Card', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
  .add('Company Card', () => (
    <div>company card</div>
  ))
  
 