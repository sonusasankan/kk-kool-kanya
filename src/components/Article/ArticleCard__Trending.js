import React from 'react';

import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription
} from '../../components/Cards';
import {TextMuted} from '../../components/TextMuted';

const articleTrending = ({
    cardLink,
    imgSrc, alt,
    cardTitle,
    authorName,
    readingTime,
    description
}) => (
    <Card landscape cardType="article-card" link={cardLink}>
        <CardImage src={imgSrc} alt={alt} />
        <CardBody>
            <CardTitle excerptLength="14">{cardTitle}</CardTitle>
            <TextMuted>
                <span>{authorName}</span>
                <span>{readingTime}</span>
            </TextMuted>
            {(description) ? <CardDescription>{description}</CardDescription> : ""}
        </CardBody>
    </Card>
)

export default articleTrending;