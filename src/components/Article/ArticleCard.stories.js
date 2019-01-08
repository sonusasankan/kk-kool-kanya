import React, { Component } from "react";
import { MemoryRouter } from "react-router";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean} from "@storybook/addon-knobs";
import ArticleCard from "./ArticleCard";
import ArticleCard__big from './ArticleCard__Big';
import ArticleCard__Overlay from './ArticleCard__Overlay';
import ArticleCard__Trending from './ArticleCard__Trending';



storiesOf("Article card", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}><div className="col-md-4 m-4">{story()}</div></MemoryRouter>
  ))
  .add("Default", () => (
    <ArticleCard  imgSrc={text('imgSrc',"https://loremflickr.com/560/242" )} 
    alt={text('alt', 'some random image')} 
    authorName={text('authorName', 'John Doe')}
    readingTime={text('readingTime', '20 minute')}
    cardTitle={text('cardTitle', 'This is title of the Article')}
    description={text('description', 'The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours.')}

    />
))
  .add("Big", () => (
    <ArticleCard__big  imgSrc={text('imgSrc',"https://loremflickr.com/560/242" )} 
    alt={text('alt', 'some random image')} 
    authorName={text('authorName', 'John Doe')}
    readingTime={text('readingTime', '20 minute')}
    cardTitle={text('cardTitle', 'This is title of the Article')}
    description={text('description', 'The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours.')}

    />
))
  .add("Trending", () => (
    <ArticleCard__Trending  imgSrc={text('imgSrc',"https://loremflickr.com/560/242" )} 
    alt={text('alt', 'some random image')} 
    authorName={text('authorName', 'John Doe')}
    readingTime={text('readingTime', '20 minute')}
    cardTitle={text('cardTitle', 'This is title of the Article')}
    description={text('description', 'The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours.')}

    />
))
  .add("Overlay", () => (
    <ArticleCard__Overlay  imgSrc={text('imgSrc',"https://loremflickr.com/560/242" )} 
    alt={text('alt', 'some random image')} 
    cardTitle={text('cardTitle', 'This is title of the Article')}

    />
))

