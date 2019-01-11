import React from 'react';

import {
  Card,
  CardImage,
  CardFavButton,
  CardBody,
  CardTitle,
  CardDescription,
} from '../Cards';
import {TextMuted} from '../TextMuted';

const articleCard__big = ({
    isFav,
    cardLink,
    imgSrc, alt,
    cardTitle,
    authorName,
    readingTime,
    readMoreLink,
    description
}) => (
    <Card big cardType="article-card" link={cardLink}>
        <CardImage src={imgSrc} alt={alt}>
            <CardFavButton top right isFav/>
        </CardImage>
        <CardBody>
            <CardTitle>{cardTitle}</CardTitle>
            <TextMuted>
                <span>{authorName}</span>
                <span>{readingTime}d</span>
            </TextMuted>
            <CardDescription excerptLength="104" readMore={readMoreLink} >
                {description}
            </CardDescription>
        </CardBody>
    </Card>
)

export default articleCard__big;