import React from 'react';
import styled from 'styled-components';

import {
  Card,
  CardBody,
  CardFavButton,
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
    position: relative;
    @media (min-width: 768px){
        display: block;
    }
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(rgb(0, 0, 0) 0%, rgba(0,0,0,0) 24%);
    }
    .card__fav-button{
        z-index: 1;
    }
`;

const articleTrending = ({
    cardLink,
    imgSrc,
    favButton,
    cardTitle,
    authorName,
    readingTime,
    description
}) => (
    <Card landscape cardType="article-card" link={cardLink}>
        <CardImage imgSrc={imgSrc}>
            {favButton ? <CardFavButton right top /> : <React.Fragment />}
        </CardImage>
        <CardBody>
            <CardTitle excerptLength="96">{cardTitle}</CardTitle>
            <TextMuted>
                <span>{authorName}</span>
                <span>{readingTime}</span>
            </TextMuted>
            {(description) ? <CardDescription excerptLength="70">{description}</CardDescription> : ""}
        </CardBody>
    </Card>
)

export default articleTrending;