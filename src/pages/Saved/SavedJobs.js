import React from 'react';
import JobCard from "../../components/Jobs/JobCard";
import {ContentWrapper} from './style';

const savedJobs = () =>(
    <ContentWrapper>
        <div className="row">
            <div className="col-12">
                <JobCard favButton />
            </div>
            <div className="col-12">
                <JobCard favButton />
            </div>
            <div className="col-12">
                <JobCard favButton />
            </div>
            <div className="col-12">
                <JobCard favButton />
            </div>
            <div className="col-12">
                <JobCard favButton />
            </div>
            <div className="col-12">
                <JobCard favButton />
            </div>
            <div className="col-12">
                <JobCard favButton />
            </div>
            <div className="col-12">
                <JobCard favButton />
            </div>
        </div>
    </ContentWrapper>
)


export default savedJobs;