import React, {Component} from 'react';

//importing components
import {CardLogo} from '../../components/Cards';
import { Button } from "../../components/Button";
import Fav from "../../components/FavButton";

//importing icons
import { FiShare2 } from "react-icons/fi";

//importing style for SectionSpecificStickyHeader
import SectionSpecificStickyHeaderWrapper from './style';

class SectionSpecificStickyHeader extends Component{

        componentDidMount(){
            //show hob description header only when entering into job description fold(2nd fold)
            let targetSectionId = '#'+this.props.targetSectionId;
            let jdSection = document.querySelector(targetSectionId),
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
        const {
            logo,
            titleName,
            subTitlename,
            buttonText
        } = this.props;
        return (
            <SectionSpecificStickyHeaderWrapper id="kk-job-description__jd__header" className="container-fluid">
                <div id="kk-job-description__jd__header__inner" className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex py-4">
                                <CardLogo src={logo} alt="godrej" />
                                <div className="d-flex flex-column justify-content-center ml-3">
                                    <h3 className="mb-0">{titleName}</h3>
                                    <span>{subTitlename}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-md-end">
                            <div>
                                <Button
                                    styleName="curved mr-3 mb-2 mb-md-0"
                                    label={buttonText}
                                />
                                <button className="kk-share-button"><FiShare2 /></button>
                                <Fav grey />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionSpecificStickyHeaderWrapper>
        )
    }
}


export default SectionSpecificStickyHeader;