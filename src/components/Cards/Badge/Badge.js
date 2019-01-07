import React from 'react';
import PropTypes from 'prop-types';

import { Badge, BadgeWrapper } from './style';

const badge = ({
  top,
  right,
  bottom,
  left,
  badges,
  numberOfBadges
}) => (
  <BadgeWrapper
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    className="card__badges"
    numberOfBadges={numberOfBadges}
  >
    {
      badges.map((element, index) => {
        if(!numberOfBadges){
          return (
            <Badge className='kk-badge' style={{zIndex : 10 - index}}>
              <img className="img-fluid" src={element} alt="badge" />
            </Badge>
          )
        }
        else{
          if(index < numberOfBadges){
            return (
              <Badge className='kk-badge' style={{zIndex : 10 - index}}>
                <img className="img-fluid" src={element} alt="badge" />
              </Badge>
            )
          }
        }
      })
    }
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
