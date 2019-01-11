import React from 'react';
import { CompanyCard } from "../../components/CompanyCard";
import {ContentWrapper} from './style';
import companyImage from "../../assets/images/img-company-descrition-1.jpg";

import {BadgeList} from '../../components/Cards/Badge';
const savedCompanies = () =>(

    <ContentWrapper>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    badgePosition="top left"
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <CompanyCard
                    isFav={true}
                    badges={[BadgeList.MATERNITY_BENEFITS, BadgeList.SAFETY, BadgeList.WORKLIFE_BALANCE]}
                    locations="Bengaluru, Delhi, Hyderabad"
                    title="Godrej Consumer Products Ltd"
                    img={companyImage}
                    alt="Godrej Logo"
                    industry="Interaction Design"
                    openings="100"
                    rating="4.5"
                />
            </div>
        </div>
    </ContentWrapper>
)

export default savedCompanies;
