import React from 'react';

import {
    Card,
    CardHead,
    CardLogo,
    CardTitle,
    CardDetails,
    CardFavButton
} from '../Cards';
import JobCardWrapper from './style';
import Logo from "../../assets/images/godrej.png";

const jobCard = ({favButton}) =>(
    <JobCardWrapper>
        <Card cardType="kk-card__job" link="/job-description">
            <CardLogo src={Logo} alt="Godrej Logo" />
            <div className="flex-grow-1">
                <CardHead>
                    <div>
                        <CardTitle>UI/UX Designer </CardTitle>
                        <p className="mb-2 kk-font-secondaryDarkGray">Godrej Consumer Product</p>
                    </div>
                </CardHead>
                <div className="d-flex kk-card__details__wrapper">
                    <CardDetails>
                        Bengaluru
                    </CardDetails>
                    <CardDetails>
                        2+ years
                    </CardDetails>
                    <CardDetails>
                        Full Time
                    </CardDetails>
                </div>
                <CardDetails>Posted 1 week ago</CardDetails>
            </div>
            <div className={"d-flex kk-view-more "+(favButton ? "flex-column justify-content-between" : "align-items-center")}>
                {favButton ? <div className="d-flex justify-content-end"><CardFavButton active /></div> : ""}
                <div>
                    <span className="d-none d-sm-none d-md-inline-block">View details </span> >
                </div>
            </div>
        </Card>
    </JobCardWrapper>
)

export default jobCard;