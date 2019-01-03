import React from 'react';

import {
    Card,
    CardImage,
    CardBody,
    CardTitle,
  } from '../../components/Cards';

const articleCardOverlay = ({
    cardLink,
    imgSrc, alt,
    cardTitle,
    details
}) => (
    <Card textOverlay cardType="article-card" link={cardLink}>
        <CardImage src={imgSrc} alt={alt} />
        <CardBody overlay>
            <CardTitle>{cardTitle}</CardTitle>
            <p className="fz-14">{details}</p>
        </CardBody>
    </Card>
)

export default articleCardOverlay;