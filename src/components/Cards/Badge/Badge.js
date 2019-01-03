import React from 'react';
import PropTypes from 'prop-types';

import { Badge, BadgeWrapper } from './style';

// function createBadges(badgesArr) {
//   badgesArr.map(element => {
//     console.log(element);
//     return (
//       <div>     
//         <img src={element} alt="badge"/>
//       </div>
//     )
//   });
//   return badgesArr;
// }

const badge = ({
  top,
  right,
  bottom,
  left,
  badges,
}) => (
  <BadgeWrapper
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    className="card__badges"
  >
    {badges.map((element, index) => {
      return (
        <Badge className='kk-badge' style={{zIndex : 10 - index}}>
          <img className="img-fluid" src={element} alt="badge" />
        </Badge>
      )
    })}
  </BadgeWrapper>
);

badge.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  numberOfBadges: PropTypes.string.isRequired,
};

badge.defaultProps = {
  top: false,
  right: false,
  bottom: false,
  left: false,
};

export default badge;
