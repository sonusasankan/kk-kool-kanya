import React from 'react';

import {
  Card,
  CardDescription,
  CardImage,
  CardFavButton,
  CardBody,
  CardTitle,
} from '../Cards';
import { TextMuted } from '../TextMuted';

const articleCard = ({
  isFav,
  cardLink,
  imgSrc,
  alt,
  cardTitle,
  authorName,
  readingTime,
  description,
}) => (
  <Card cardType="article-card" link={cardLink}>
    <CardImage src={imgSrc} alt={alt}>
      <CardFavButton top right isFav={isFav}/>
    </CardImage>
    <CardBody>
      <CardTitle excerptLength={70} >{cardTitle}</CardTitle>
      <TextMuted>
        <span>{authorName}</span>
        <span>{readingTime}</span>
      </TextMuted>
      {description ? (<CardDescription excerptLength="140">{description}</CardDescription>) : ''}
    </CardBody>
  </Card>
);

export default articleCard;
