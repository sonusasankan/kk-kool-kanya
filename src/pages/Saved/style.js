import styled from 'styled-components';
import Colors from '../../themes/color';

const Sidebar = styled.div`
    @media (min-width: 768px){
        position: sticky;
        top: 146px;
        border-right: 1px solid #f0f0f0;
    }
    h3{
        color: ${Colors.brandColor};
        margin-bottom: 2rem;
    }
    a{
        h3{
            color: #000;
        }
    }
    .list-group{
        margin-top: -1rem;
        margin-bottom: 2rem;
    }
    &.kk-profile__sidebar{
        @media (min-width: 768px){
            top: 10rem;
        }
    }
`;



const ContentWrapper = styled.div`
    @media (min-width: 768px){
        padding-left: 25px;
    }
    .kk-card__job{
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 1rem;
    }
    .kk-card-details__wrapper{
        margin-bottom: 0;
    }
`;

export {Sidebar, ContentWrapper};