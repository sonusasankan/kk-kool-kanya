import React from 'react';
import styled from 'styled-components';

import {
  Card,
  CardBody,
  CardTitle,
  CardDescription
} from '../../components/Cards';
import {TextMuted} from '../../components/TextMuted';


//custom card image for trending cards

const CardImage = styled.div`
    width: 160px;
    min-width: 160px;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url(${props=> props.imgSrc});
    min-height: 127px;
    height: inherit;
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`;

const articleTrending = ({
    cardLink,
    imgSrc,
    cardTitle,
    authorName,
    readingTime,
    description
}) => (
    <Card landscape cardType="article-card" link={cardLink}>
        <CardImage imgSrc={imgSrc}  />
        <CardBody>
            <CardTitle excerptLength="96">{cardTitle}</CardTitle>
            <TextMuted>
                <span>{authorName}</span>
                <span>{readingTime}</span>
            </TextMuted>
            {(description) ? <CardDescription excerptLength="100">{description}</CardDescription> : ""}
        </CardBody>
    </Card>
)

export default articleTrending;