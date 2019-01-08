import React from 'react';
import JobCard from "../../components/Jobs/JobCard";
import {ContentWrapper} from './style';

// dummy company logo
import Logo from "../../assets/images/godrej.png";

const savedJobs = () =>(
    <ContentWrapper>
        <div className="row">
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
            <div className="col-12">
                <JobCard
                    favButton
                    companyLogo={Logo}
                    jobTitle="UI/UX Designer"
                    location="Bengaluru"
                    experienceRequired="2+ years"
                    typeOfJob="Full Time"
                    postedOn="Posted 3 weeks ago"
                    detailLink="/job-description"
                />
            </div>
        </div>
    </ContentWrapper>
)


export default savedJobs;