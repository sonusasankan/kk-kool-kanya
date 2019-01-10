import React from 'react';

import {
    Card,
    CardImage,
    CardBody,
    CardTitle,
    CardLogo
  } from '../../components/Cards';

const articleCardOverlay = ({
    cardLink,
    imgSrc, alt,
    cardTitle,
    details,
    authorImg,
    authorImgAlt,
    Icon,
    authorName
}) => (
    <Card textOverlay cardType="article-card" link={cardLink}>
        <CardImage src={imgSrc} alt={alt} />
        <CardBody overlay>
            <CardTitle>{cardTitle}</CardTitle>
            <p className="fz-14">{details}</p>
             {authorImg? <div className="d-flex kk-article-author-detail align-items-center mt-3">
                <CardLogo alt={authorImgAlt} src={authorImg}></CardLogo>
                <p>{authorName}</p>
            </div> : null}
            {Icon? <div className="kk-article-overlay-arrow mt-3">{Icon}</div>: null}
        </CardBody>
    </Card>
)

articleCardOverlay.defaultProps = {

}

export default articleCardOverlay;