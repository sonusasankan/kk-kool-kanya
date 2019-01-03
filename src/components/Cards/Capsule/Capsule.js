import React from 'react';

import Capsule from './style';


const capsule = ({
    isSelected,
    imgSrc,
    imgAlt,
    title
}) => (
    <Capsule className={"capsule " + (isSelected ? "selected" : "")}>
        <div className="capsule__img__wrapper">
            <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="capsule__title">{title}</div>
    </Capsule>
)

export default capsule;