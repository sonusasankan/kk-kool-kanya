import styled from 'styled-components';
import Colors from '../../themes/color';

const ListWrapper = styled.ul`
    line-height: 24px;
    color: ${Colors.secondaryLightGray};
    li{
        padding-left: 1rem;
        position: relative;
        margin-bottom: 1.5rem;
    }
    li::before{
        content: "";
        background-color: ${Colors.secondaryDarkGray};
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-left: -1em;
        position: absolute;
        top: 10px;
    }
`;

const JobCardWrapper = styled.div`
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid #f0f0f0;
    .kk-card__job{
        margin: 0;
    }
`;

const JdStickyHeader = styled.div`
    position: fixed;
    top: -200px;
    left: 0;
    width: 100vw;
    z-index: 99;
    background-color: #FFF;
    box-shadow: 0 6px 11px 0 rgba(131, 124, 140, 0.15);
    transition: all 0.2s ease-out;
    &.show{
        top: 64px;
        &.up{
            top: 0;
        }
    }
    .kk-card__logo{
        height: 4rem;
        min-width: 4rem;
        width: 4rem;
    }
    .card__fav-button{
        position: relative;
        top: 5px;
        margin-left: 24px;
        font-size: 1.8rem;
    }
    
`;


export {ListWrapper, JobCardWrapper, JdStickyHeader};