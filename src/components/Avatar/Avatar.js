import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


//  importing image
import defaultAvatar from '../../assets/images/avatar.png';

import { AvatarWraper, Image, Name } from './style';


const Avatar = ({
  className, isLoggedIn, imgSrc, link, avatarTitle,
}) => (
  <Link to={link}>
  <AvatarWraper className={`avatar ${className}`} >
    <Image className="avatar__img">
      <img src={isLoggedIn === true ? imgSrc : defaultAvatar} alt="User Avatar" />
    </Image>
    {(avatarTitle ? <Name className="avatar__title">{avatarTitle}</Name> : "")}
  </AvatarWraper>
  </Link>
);

Avatar.propTypes = {
  link: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  avatarTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Avatar.defaultProps = {
  avatarTitle: false,
  link: '/',
};

export default Avatar;
