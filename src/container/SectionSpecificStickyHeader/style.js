import styled from 'styled-components';

const SectionSpecificStickyHeaderWrapper = styled.div`
    position: fixed;
    top: -800px;
    left: 0;
    width: 100vw;
    z-index: 96;
    background-color: #FFF;
    box-shadow: 0 6px 11px 0 rgba(131, 124, 140, 0.15);
    transition: all 0.2s ease-out;
    &.show{
        top: 56px;
        @media (min-width: 768px){
            top: 64px;
        }
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
    h3{
        @media (max-width: 768px){
            font-size: 1erm;
        }
    }
`;

export default SectionSpecificStickyHeaderWrapper;