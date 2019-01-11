import React from 'react';

import {DescriptionWithCarouselWrapper, HeaderWrapper, DetailsWrapper, TabsWrapper, Capsule, Description, ImgHolder} from './style';
import {CardLogo, CardDetails, CardFavButton} from '../../components/Cards';
import { Button } from "../../components/Button";

//importing assets
import {IcShare24, IcLocation24, IcExperience24, IcJobType24} from '../../components/IconSet';
import godrej from "../../assets/images/godrej.png";
import Carousel from '../../components/Carousel';

const option = {
    loop: true,
    center: true,
    margin: 0,
    callbacks: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            margin: 16,
            stagePadding: 16,
        },
        992: {
            items: 3,
            margin: 8,
            nav: true,
            stagePadding: 32
        }
    }
}

const onTranslated = function(){
    let imgsrc = document.querySelector('.owl-item.active.center img').getAttribute('src');
    document.querySelector('#imgholder').setAttribute('src', imgsrc);
}
const descriptionWithCarousel = () => (
    <DescriptionWithCarouselWrapper>
        <div className="row">
            <div className="col-12 col-lg-6">
                <HeaderWrapper className="d-flex">
                    <CardLogo src={godrej} alt="godrej" />
                    <div className="d-flex flex-column flex-grow-1">
                        <h2>UI/UX Designer</h2>
                        <p>Godrej Consumer Product</p>
                    </div>
                    <div className="d-flex">
                        <div className="ml-3"><IcShare24 /></div>
                        <div className="ml-3"><CardFavButton /></div>
                        {/* <button className="kk-icon-wrapper">
                            <FiShare2 />
                        </button>
                        <Fav grey/> */}
                    </div>
                </HeaderWrapper>
                <DetailsWrapper className="mr-align kk-description__details">
                    <div className="d-flex mt-3"><IcLocation24 /><span>Banglore</span></div>
                    <div className="d-flex mt-3"><IcExperience24 /><span>0-2 years experience</span></div>
                    <div className="d-flex mt-3"><IcJobType24 /><span>Full time</span></div>
                </DetailsWrapper>

                <TabsWrapper className="mr-align">
                    <Capsule>Graphics</Capsule>
                    <Capsule>Adobe Illustrator</Capsule>
                    <Capsule>Sketch</Capsule>
                    <Capsule>Zeplin</Capsule>
                    <Capsule>Wireframe</Capsule>
                    <Capsule>Content Writing</Capsule>
                </TabsWrapper>

                <Description className="mr-align">
                    Established in 1897, the Godrej Group has its roots in India's Independence and Swadeshi movement. They enjoy the patronage of 1.1 billion consumers globally.
                </Description>

                <div className="mr-align">
                    <Button
                        styleName="curved mr-3 mb-2 mb-md-0"
                        label="Apply Now"
                    />
                    <Button
                        primary={false}
                        hasBorder
                        label="Talk to a Kool-Kanya"
                        styleName="curved mb-4 mb-md-0" />
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <ImgHolder>
                    <img id="imgholder" className="img-fluid" src="https://picsum.photos/560/376/" alt="carousel-item" />
                </ImgHolder>
                <Carousel option={option} onTranslated={onTranslated}>
                    <div className="item">
                        <img src="https://picsum.photos/560/376/" alt="carousel-item" />
                    </div>
                    <div className="item">
                        <img src="https://picsum.photos/560/376/?random" alt="carousel-item" />
                    </div>
                    <div className="item">
                        <img src="https://picsum.photos/560/376/" alt="carousel-item" />
                    </div>
                    <div className="item">
                        <img src="https://picsum.photos/560/376/?random" alt="carousel-item" />
                    </div>
                    <div className="item">
                        <img src="https://picsum.photos/560/376/" alt="carousel-item" />
                    </div>
                </Carousel></div>
        </div>


        {/* <img src="https://picsum.photos/560/376/?random" alt="carousel_item" /> */}

    </DescriptionWithCarouselWrapper>
)

export default descriptionWithCarousel;