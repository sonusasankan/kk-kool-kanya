import React from 'react';
import styled from 'styled-components';

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
  .add('Company Card', () => (
    <Wrapper>
      <Card cardType="card__company">
        <CardBadge top left numberOfBadges="3" />
        <CardFavButton top right />
        <CardImage src="https://loremflickr.com/260/220" alt="Alternate text for image" />
        <CardHead>
          <CardLogo  src={Logo} alt="Godrej Logo" />
          <CardTitle>Godrej Consumer Products Ltd</CardTitle>
          <CardRating>4.2</CardRating>
        </CardHead>
        <CardBody>
          <CardDetails icon="icon-ic-location-24">
                    Bengaluru, Delhi, Hyderabad
          </CardDetails>
          <CardDetails icon="icon-ic-industry-24">
                    Interaction Design
          </CardDetails>
          <CardDetails icon="icon-ic-job-24">
                    100 Job Openings
          </CardDetails>
        </CardBody>
      </Card>
    </Wrapper>
  ))
  .add('Company Card with One Button', () => (
    <Wrapper>
      <Card cardType="card__company">
        <CardBadge top left numberOfBadges="3" />
        <CardFavButton top right />
        <CardImage src="https://loremflickr.com/260/220" alt="Alternate text for image" />
        <CardHead>
          <CardLogo src={Logo} alt="Godrej Logo" />
          <CardTitle>Godrej Consumer Products Ltd</CardTitle>
          <CardRating>4.2</CardRating>
        </CardHead>
        <CardBody>
          <CardDetails icon="icon-ic-location-24">
                    Bengaluru, Delhi, Hyderabad
          </CardDetails>
          <CardDetails icon="icon-ic-industry-24">
                    Interaction Design
          </CardDetails>
          <CardDetails icon="icon-ic-job-24">
                    100 Job Openings
          </CardDetails>
          <CardButtonGroup>
            <Button
              button
              label="Talk to a Kool Kanya"
            >
Talk to a Kool Kanya
            </Button>
          </CardButtonGroup>
        </CardBody>
      </Card>
    </Wrapper>
  ))
  .add('Company Card with Two Button', () => (
    <Wrapper>
      <Card cardType="card__company">
        <CardBadge top left numberOfBadges="3" />
        <CardFavButton top right />
        <CardImage src="https://loremflickr.com/260/220" alt="Alternate text for image" />
        <CardHead>
          <CardLogo src={Logo} alt="Godrej Logo" />
          <CardTitle>Godrej Consumer Products Ltd</CardTitle>
          <CardRating>4.2</CardRating>
        </CardHead>
        <CardBody>
          <CardDetails icon="icon-ic-location-24">
                    Bengaluru, Delhi, Hyderabad
          </CardDetails>
          <CardDetails icon="icon-ic-industry-24">
                    Interaction Design
          </CardDetails>
          <CardDetails icon="icon-ic-job-24">
                    100 Job Openings
          </CardDetails>
          <CardButtonGroup>
            <Button
              button
              label="Talk to a Kool Kanya"
            >
Talk to a Kool Kanya
            </Button>
            <Button
              primary={false}
              hasBorder
              label="View Jobs (12)"
              Secondary
              button
            >
                      View Jobs (12)
            </Button>
          </CardButtonGroup>
        </CardBody>
      </Card>
    </Wrapper>
  ))
  // .add('Article Card', ()=>(
  //   <div className="row">
  //     <div className='col-12 col-md-12 col-lg-6 mt-5'>
  //       <Card big cardType="article-card">
  //         <CardImage src="https://loremflickr.com/560/242" alt="Alternate text for image">
  //           <CardFavButton top right />
  //         </CardImage>
  //         <CardBody>
  //           <CardTitle>Tech Companies Are Getting Free Work Out of Job Applicants</CardTitle>
  //           <CardAuthor>Sheeba Chaddha</CardAuthor>
  //           <CardReadingTime>7 mins read</CardReadingTime>
  //           <CardDescription excerptLength="20" readMore="https://theparentcue.org/the-stories-of-childhood/" >
  //           The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours.
  //           </CardDescription>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   </div>
  // ))
  // .add('Article Card without description', ()=>(
  //   <div className="row">
  //     <div className='col-12 col-md-6 col-lg-4 col-xl-3 mt-5'>
  //       <Card cardType="article-card">
  //         <CardImage src="https://loremflickr.com/260/160" alt="Alternate text for image">
  //           <CardFavButton top right />
  //         </CardImage>
  //         <CardBody>
  //           <CardTitle>Tools I Use To Learn, Work And Travel Anywhere</CardTitle>
  //           <CardAuthor>Sheeba Chaddha</CardAuthor>
  //           <CardReadingTime>7 mins read</CardReadingTime>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   </div>
  // ))
  // .add('Article Card landscape', ()=>(
  //   <div className="row">
  //     <div className='col-12 col-lg-6 mt-5'>
  //       <Card landscape cardType="article-card">
  //         <CardImage src="https://loremflickr.com/200/225" alt="Alternate text for image">
  //           <CardFavButton top right />
  //         </CardImage>
  //         <CardBody>
  //           <CardTitle>Tools I Use To Learn, Work And Travel Anywhere</CardTitle>
  //           <CardAuthor>Lewis Carroll</CardAuthor>
  //           <CardReadingTime>120 mins read</CardReadingTime>
  //           <CardDescription readMore="https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373">The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours like Mark Zuckerberg, who has said he clocks a like Mark Zuckerberg, who has said he clocks a like Mark Zuckerberg, who has said he clocks a</CardDescription>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   </div>
  // ))
  // .add('Article Card small', ()=>(
  //   <div className="row">
  //     <div className='col-12 col-md-4 col-lg-3 mt-5'>
  //       <Card textOverlay cardType="article-card">
  //         <CardImage src="https://loremflickr.com/216/262" alt="Alternate text for image" />
  //         <CardBody overlay>
  //           <CardTitle>Career Advice</CardTitle>
  //           <p>28 Articles</p>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   </div>
  // ))
