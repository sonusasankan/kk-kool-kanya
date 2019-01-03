import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap-grid.css';

import {
    Card,
    CardDescription,
    CardImage,
    CardBody,
    CardFavButton,
    CardTitle
  } from '..';
 import {TextMuted} from '../../TextMuted';

storiesOf('Card', module)
.add('Article Card', ()=>(
    <div className="row">
      <div className='col-12 col-md-12 col-lg-6 mt-5'>
        <Card big cardType="article-card">
          <CardImage src="https://loremflickr.com/560/242" alt="Alternate text for image">
            <CardFavButton top right />
          </CardImage>
          <CardBody>
            <CardTitle>Tech Companies Are Getting Free Work Out of Job Applicants</CardTitle>
            <TextMuted>
              <span>By Sheeba Chaddha</span>
              <span>7 min read</span>
            </TextMuted>
            <CardDescription excerptLength="20" readMore="https://theparentcue.org/the-stories-of-childhood/" >
            The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours.
            </CardDescription>
          </CardBody>
        </Card>
      </div>
    </div>
  ))
  .add('Article Card without description', ()=>(
    <div className="row">
      <div className='col-12 col-md-6 col-lg-4 col-xl-3 mt-5'>
        <Card cardType="article-card">
          <CardImage src="https://loremflickr.com/260/160" alt="Alternate text for image">
            <CardFavButton top right />
          </CardImage>
          <CardBody>
            <CardTitle>Tools I Use To Learn, Work And Travel Anywhere</CardTitle>
            <TextMuted>
              <span>By Sheeba Chaddha</span>
              <span>7 min read</span>
            </TextMuted>
          </CardBody>
        </Card>
      </div>
    </div>
  ))
  .add('Article Card landscape hasDescription', ()=>(
    <div className="row">
      <div className='col-12 col-lg-6 mt-5'>
        <Card landscape hasDescription cardType="article-card">
          <CardImage src="https://loremflickr.com/200/225" alt="Alternate text for image">
            <CardFavButton top right />
          </CardImage>
          <CardBody>
            <CardTitle>Tools I Use To Learn, Work And Travel Anywhere</CardTitle>
            <TextMuted>
              <span>By Sheeba Chaddha</span>
              <span>7 min read</span>
            </TextMuted>
            <CardDescription readMore="https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373">The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours like Mark Zuckerberg, who has said he clocks a like Mark Zuckerberg, who has said he clocks a like Mark Zuckerberg, who has said he clocks a</CardDescription>
          </CardBody>
        </Card>
      </div>
    </div>
  ))
  .add('Article Card landscape', ()=>(
    <div className="row">
      <div className='col-12 col-lg-6 mt-5'>
        <Card landscape hasDescription cardType="article-card">
          <CardImage src="https://loremflickr.com/160/127" alt="Alternate text for image">
            <CardFavButton top right />
          </CardImage>
          <CardBody>
            <CardTitle>Tools I Use To Learn, Work And Travel Anywhere</CardTitle>
            <TextMuted>
              <span>By Sheeba Chaddha</span>
              <span>7 min read</span>
            </TextMuted>
          </CardBody>
        </Card>
      </div>
    </div>
  ))
  .add('Article Card small', ()=>(
    <div className="row">
      <div className='col-12 col-md-4 col-lg-3 mt-5'>
        <Card textOverlay cardType="article-card">
          <CardImage src="https://loremflickr.com/216/262" alt="Alternate text for image" />
          <CardBody overlay>
            <CardTitle>Career Advice</CardTitle>
            <p>28 Articles</p>
          </CardBody>
        </Card>
      </div>
    </div>
  ))
