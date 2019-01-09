import React, {Component} from 'react';

//importing components
import {CardLogo} from '../../components/Cards';
import { Button } from "../../components/Button";
import Fav from "../../components/FavButton";

//importing icons
import { FiShare2 } from "react-icons/fi";

//importing style for SectionSpecificStickyHeader
import SectionSpecificStickyHeaderWrapper from './style';

//importing dummy images
import godrej from "../../assets/images/godrej.png";

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
        const {children} = this.props;
        return (
            <SectionSpecificStickyHeaderWrapper id="kk-job-description__jd__header" className="container-fluid">
                <div id="kk-job-description__jd__header__inner" className="container">
                    {children}
                </div>
            </SectionSpecificStickyHeaderWrapper>
        )
    }
}


export default SectionSpecificStickyHeader;