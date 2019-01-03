import React, {Component} from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import JobCard  from "../../components/Jobs";
import {DescriptionWithCarousel} from '../../container';
import {CardLogo} from '../../components/Cards';
import godrej from "../../assets/images/godrej.png";
import { Button } from "../../components/Button";
import Fav from "../../components/FavButton";
import SearchContainer from '../../components/Search/SearchContainer';
import { FiShare2 } from "react-icons/fi";

import {ListWrapper, JobCardWrapper, JdStickyHeader} from './JobsDescription__style';

class JobDescription extends Component{
    
    componentDidMount(){

        //show hob description header only when entering into job description fold(2nd fold)
        let jdSection = document.querySelector('#kk-job-description__jd'),
        jdSectionStickyHeader = document.querySelector('#kk-job-description__jd__header'),
        jdSectionHeight = parseInt(jdSection.getBoundingClientRect().height),
        jdSectionHeader = document.querySelector('#kk-job-description__jd__header');
        let currentTop, lastTop=0;
        window.addEventListener('scroll', function(){
            let jdSectiontop = parseInt(jdSection.getBoundingClientRect().top);
            if((jdSectiontop < 0) && ((jdSectiontop + (jdSectionHeight - 187)) > 0)){
                jdSectionHeader.classList.add('show');
            }
            else{
                if(jdSectionHeader.classList.contains("show")){
                    jdSectionHeader.classList.remove('show');
                }
            }

            //setting top position of description header accroding to navigation header
            currentTop = window.scrollY;
            if(currentTop > lastTop){
                jdSectionStickyHeader.classList.add('up')
            }
            else{
                jdSectionStickyHeader.classList.remove('up');
            }
            lastTop = currentTop;
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="kk-search text-center">
                    <SearchContainer placeholder="Search by company name, industry or location"/>
                </div>
                <section className="kk-breadcrumb py-0 d-none d-md-block">
                    <div className="container">
                        <BreadCrumb>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>UX Designer</li>
                        </BreadCrumb>
                    </div>
                </section>

                <section className="container pt-0">
                    <DescriptionWithCarousel />
                </section>

                <JdStickyHeader id="kk-job-description__jd__header" className="container-fluid">
                    <div id="kk-job-description__jd__header__inner" className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex py-4">
                                    <CardLogo src={godrej} alt="godrej" />
                                    <div className="d-flex flex-column justify-content-center ml-3">
                                        <h3 className="mb-0">UI/UX Designer</h3>
                                        <span>Godrej Consumer Product</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-md-end">
                                <div>
                                    <Button
                                        styleName="curved mr-3 mb-2 mb-md-0"
                                        label="Apply Now"
                                    />
                                    <button className="kk-share-button"><FiShare2 /></button>
                                    <Fav grey />
                                </div>
                            </div>
                        </div>
                    </div>
                </JdStickyHeader>
                <section id="kk-job-description__jd" className="container-fluid position-relative" style={{background: '#f6f7fc'}}>
                    <div className="container">
                        <h2>Job Description</h2>
                        <p>
                        Godrej consumer Product Limited is looking for a UI/UX Designer to join our team to work with our amazing clients prepping files and doing light design artwork.
                        </p>


                        <div className="mt-5">
                            <h3 className="mt-3">Overview of Responsibilities</h3>
                            <ListWrapper>
                                <li>Conduct a needs assessment of the customer. Review and interpret customer needs and instructions, asking questions to ensure understanding, and offering creative solutions when appropriate.</li>

                                <li>Create light designs appropriate to individual customer budgets.</li>

                                <li>Ensure the production art projects are completed according to customer specifications.</li>

                                <li>Accurately record time for each project.</li>

                                <li>Provide proofs to customers in timely fashion.</li>

                                <li>Effectively manage multiple priorities.</li>

                                <li>Create internal mock ups and tech packs as well as customer facing versions.</li>

                                <li>Create apparel production files using customer supplied assets.</li>
                            </ListWrapper>
                        </div>

                        <div className="mt-5">
                            <h3 className="mb-3">Key Competencies</h3>
                            <ListWrapper>
                                <li>Ability to read and comprehend simple instructions, job tickets, job notes, press imposition, simple reports, and procedure manuals.</li>

                                <li>Must have a basic knowledge of either Mac or Windows operating systems.</li>

                                <li>Must be proficient in Adobe Photoshop, InDesign, and Illustrator.</li>
                            </ListWrapper>
                        </div>

                        <div className="mt-5">
                            <h3 className="mb-3">What to Know about working at Godrej</h3>
                            <ListWrapper>
                                <li>Constant Change...we like to grow and are firm believers that you have to change in order to do so. With that, expect that processes, responsibilities, technology, products and expectations will change.</li>

                                <li>Flexibility...you must be flexible in regards to responsibilities and schedule. We roll with what our customers needs are. You must be comfortable with ambiguity.</li>

                                <li>Quality...we pride ourselves on producing a high quality product and have the same expectations for everyone’s work.</li>

                                <li>Customer Service...we focus on our customers and going beyond their expectations.</li>

                                <li>Team...we work and learn as a team.</li>
                            </ListWrapper>
                        </div>

                        <div className="mt-5">
                            <h3 className="mb-3">Why Work at Godrej</h3>
                            <ListWrapper>
                            <li>Competitive pay and benefits</li>

                            <li>On the job training and development</li>

                            <li>Incredible diverse team to work with</li>
                            </ListWrapper>
                        </div>
                    </div>
                </section>

                <section className="container">
                    <h2 className="mb-4">Similar Job Openings</h2>
                    <JobCardWrapper><JobCard /></JobCardWrapper>
                    <JobCardWrapper><JobCard /></JobCardWrapper>
                    <JobCardWrapper><JobCard /></JobCardWrapper>
                    <JobCardWrapper><JobCard /></JobCardWrapper>
                    <JobCardWrapper><JobCard /></JobCardWrapper>
                </section>
            </React.Fragment>
        )
    }
}

export default JobDescription;