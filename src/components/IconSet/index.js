import React from 'react';

import {Icon24} from './style';

import Heart24           from '../../assets/custom-icons-svg/ic-heart-grey-unlike-24.svg';
import HeartLiked24      from '../../assets/custom-icons-svg/ic-heart-liked-24.svg';
import Facebook24        from '../../assets/custom-icons-svg/ic-facebook-24.svg';
import Linkedin24        from '../../assets/custom-icons-svg/ic-linkedin-24.svg';
import Twitter24        from '../../assets/custom-icons-svg/ic-twitter-24.svg';
import Instagram24        from '../../assets/custom-icons-svg/ic-instagram-24.svg';
// import Heart24Liked      from '../../assets/custom-icons-svg/ic-heart-liked-24.svg';
// import Heart32           from '../../assets/custom-icons-svg/ic-heart-32.svg';
// import Heart32Liked      from '../../assets/custom-icons-svg/ic_heart-liked_32.svg';
// import Location          from '../../assets/custom-icons-svg/ic-location.svg';
// import BecomeKoolKanya   from '../../assets/custom-icons-svg/ic-bakk.svg';
// import Cross             from '../../assets/custom-icons-svg/ic-cross-16.svg';
// import DOB               from '../../assets/custom-icons-svg/ic-dob.svg';
// import Experience        from '../../assets/custom-icons-svg/ic-experience.svg';
// import Facebook          from '../../assets/custom-icons-svg/ic-facebook'


//heart icon
const IcHeart24 = (className)=>(
    <Icon24 className={className}>
        <img src={Heart24} alt="favIcon" />
    </Icon24>
)
//heart icon LIKED
const IcHeartLiked24 = (className)=>(
    <Icon24 className={className}>
        <img src={HeartLiked24} alt="favIcon" />
    </Icon24>
)

const IcFacebook24 = (className) => (
    <Icon24 className={className}>
        <img src={Facebook24} alt="favIcon" />
    </Icon24>
)

const IcLinkedin = (className) => (
    <Icon24 className={className}>
        <img src={Linkedin24} alt="favIcon" />
    </Icon24>
)

const IcTwitter = (className) => (
    <Icon24 className={className}>
        <img src={Twitter24} alt="favIcon" />
    </Icon24>
)

const IcInstagram = (className) => (
    <Icon24 className={className}>
        <img src={Instagram24} alt="favIcon" />
    </Icon24>
)

export {IcHeart24, IcHeartLiked24, IcFacebook24, IcLinkedin, IcTwitter, IcInstagram};
