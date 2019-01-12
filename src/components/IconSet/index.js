import React from 'react';

import {Icon24, Icon32} from './style';

import Heart24           from '../../assets/custom-icons-svg/ic-heart-grey-unlike-24.svg';
import Heart32           from '../../assets/custom-icons-svg/ic-heart-32.svg';
import HeartLiked24      from '../../assets/custom-icons-svg/ic-heart-liked-24.svg';
import HeartLiked32      from '../../assets/custom-icons-svg/ic-heart-liked-32.svg';
import Facebook24        from '../../assets/custom-icons-svg/ic-facebook-24.svg';
import FacebookOutline32 from '../../assets/custom-icons-svg/ic-facebook_32.svg';
import Linkedin24        from '../../assets/custom-icons-svg/ic-linkedin-24.svg';
import Linkedin32        from '../../assets/custom-icons-svg/ic-linkedin-32.svg';
import Twitter24         from '../../assets/custom-icons-svg/ic-twitter-24.svg';
import Twitter32         from '../../assets/custom-icons-svg/ic-twitter-32.svg';
import Instagram24       from '../../assets/custom-icons-svg/ic-instagram-24.svg';
import Share24           from '../../assets/custom-icons-svg/ic-share-24.svg';
import Location24        from '../../assets/custom-icons-svg/ic-location-24.svg';
import Experience24      from '../../assets/custom-icons-svg/ic-experience-24.svg';
import JobType24         from '../../assets/custom-icons-svg/ic-jobtype-24.svg';
import Mail32            from '../../assets/custom-icons-svg/ic-mail-32.svg';
import Dob24            from '../../assets/custom-icons-svg/ic-dob-24.svg';

//heart icon
const IcHeart24 = (className)=>(
    <Icon24 className={className}>
        <img src={Heart24} alt="kk-icon" />
    </Icon24>
)
//heart icon LIKED
const IcHeartLiked24 = (className)=>(
    <Icon24 className={className+ " text-center"}>
        <img className="d-inline-block" src={HeartLiked24} alt="kk-icon" />
    </Icon24>
)

//bigger heart icon
const IcHeart32 = (className) => (
    <Icon32 className={className}>
        <img src={Heart32} alt="kk-icon" />
    </Icon32>
)

//bigger heart icon liked
const IcHeartLiked32 = (className) => (
    <Icon32 className={className}>
        <img src={HeartLiked32} alt="kk-icon" />
    </Icon32>
)

const IcFacebook24 = (className) => (
    <Icon24 className={className}>
        <img src={Facebook24} alt="kk-icon" />
    </Icon24>
)

const IcFacebookOutline32 = (className) => (
    <Icon32 className={className}>
        <img src={FacebookOutline32} alt="kk-icon" />
    </Icon32>
)

const IcLinkedin24 = (className) => (
    <Icon24 className={className}>
        <img src={Linkedin24} alt="kk-icon" />
    </Icon24>
)

const IcLinkedin32 = (className)=>(
    <Icon32 className={className} alt="kk-icon">
        <img src={Linkedin32} alt="kk-icon" />
    </Icon32>
)

const IcTwitter24 = (className) => (
    <Icon24 className={className}>
        <img src={Twitter24} alt="kk-icon" />
    </Icon24>
)

const IcTwitter32 = (className) => (
    <Icon32 className={className}>
        <img src={Twitter32} alt="kk-icon" />
    </Icon32>
)

const IcInstagram24 = (className) => (
    <Icon24 className={className}>
        <img src={Instagram24} alt="kk-icon" />
    </Icon24>
)


const IcShare24 = (className) => (
    <Icon24 className={className}>
        <img src={Share24} alt="kk-icon" />
    </Icon24>
)

const IcLocation24 = (className) => (
    <Icon24 className={className}>
        <img src={Location24} alt="kk-icon" />
    </Icon24>
)

const IcExperience24 = (className) => (
    <Icon24 className={className}>
        <img src={Experience24} alt="kk-icon" />
    </Icon24>
)

const IcJobType24 = (className) => (
    <Icon24 className={className}>
        <img src={JobType24} alt="kk-icon" />
    </Icon24>
)

const IcDob24 = (className) => (
    <Icon24 className={className}>
        <img src={Dob24} alt="kk-icon" />
    </Icon24>
)


const IcMail32 = (className) => (
    <Icon32 className={className}>
        <img src={Mail32} alt="kk-icon" />
    </Icon32>
)

const IcMail32 = (className) => (
    <Icon32 className={className}>
        <img src={Mail32} alt="kk-icon" />
    </Icon32>
)



export {
    IcHeart24,
    IcHeartLiked24,
    IcFacebook24,
    IcLinkedin24,
    IcTwitter24,
    IcInstagram24,
    IcShare24,
    IcLocation24,
    IcExperience24,
    IcJobType24,
    IcDob24,
    IcTwitter32,
    IcHeart32,
    IcLinkedin32,
    IcHeartLiked32,
    IcFacebookOutline32,
    IcMail32
};
