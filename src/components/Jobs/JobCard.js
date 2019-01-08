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

//icon import 
import { IoIosArrowForward } from "react-icons/io";

const jobCard = ({
    favButton,
    companyLogo,
    jobTitle,
    companyName,
    location,
    experienceRequired,
    typeOfJob,
    postedOn,
    detailLink
}) =>(
    <JobCardWrapper>
        <Card cardType="kk-card__job" link={detailLink}>
            <CardLogo src={companyLogo} alt="Godrej Logo" />
            <div className="flex-grow-1">
                <CardHead>
                    <div>
                        <CardTitle>{jobTitle}</CardTitle>
                        <p className="mb-2 kk-font-secondaryDarkGray">{companyName}</p>
                    </div>
                </CardHead>
                <div className="d-flex kk-card__details__wrapper">
                    <CardDetails>
                        {location}
                    </CardDetails>
                    <CardDetails>
                        {experienceRequired}
                    </CardDetails>
                    <CardDetails>
                        {typeOfJob}
                    </CardDetails>
                </div>
                <CardDetails>{postedOn}</CardDetails>
            </div>
            <div className={"d-flex kk-view-more "+(favButton ? "flex-column justify-content-between" : "align-items-center")}>
                {favButton ? <div className="d-flex justify-content-end"><CardFavButton active /></div> : ""}
                <div>
                    <span className="d-none d-sm-none d-md-inline-block">View details </span><IoIosArrowForward />
                </div>
            </div>
        </Card>
    </JobCardWrapper>
)

export default jobCard;