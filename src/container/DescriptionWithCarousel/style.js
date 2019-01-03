import styled from 'styled-components';
import Colors from '../../themes/color';

const DescriptionWithCarouselWrapper = styled.div`
    .mr-align{
        margin-left: 61px!important;
        @media (min-width: 768px){
            margin-left: 88px !important;
        }
    }
    .owl-carousel{
        margin-top: 40px;
        @media (min-width: 992px){
            margin-top: 0;
        }
    }
    .owl-theme .owl-item .item{
        position: relative;
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
    .owl-theme .owl-item.center{
        .item{
            &::after{
                content: "";
                background-color: transparent;
            }
        }
    }
    .owl-carousel .owl-stage-outer{
        padding-top: 16px !important;
        margin-top: -16px !important;
        padding-bottom: 16px!important;
        margin-bottom: 16px !important;
    }
    .owl-item.active.center{
        border-radius: 4px;
        transform: scale(1.15);
        z-index: 2;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.7);
    }
    .featured-categories.owl-theme .owl-nav .owl-prev,
    .featured-categories.owl-theme .owl-nav .owl-next
    {
        height: 110px;
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
    p{
        color: ${Colors.secondaryDarkGray};
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
    }
    .card__fav-button{
        margin-left: 0.5rem;
    }
    .kk-card__logo{
        width: 54px;
        min-width: 54px;
        height: 54px;
        @media (min-width: 768px){
            width: 72px;
            min-width: 72px;
            height: 72px;
            margin-right: 20px;
        }
    }
    .kk-icon-wrapper{
        background-color: transparent;
        border: none;
        color: ${Colors.tertiaryExtraLightGray};
        font-size: 22px;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
    .card__fav-button{
        position: relative;
        top: 4px;
    }
`;

const DetailsWrapper = styled.div`
    .kk-card-details__wrapper{
        margin-top: 1rem;
    }
`;

const TabsWrapper = styled.div`
    margin-top: 2rem;
`;

const Capsule = styled.div`
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    margin: 0 0.5rem 0.5rem 0;
    background-color: #e1e1e1;
    color: ${Colors.secondaryDarkGray};
    border-radius: 2rem;
`;

const Description = styled.p`
    color: ${Colors.secondaryLightGray};
    margin: 2rem 0 2.5rem 0;
`;

const ImgHolder = styled.div`
    margin-bottom: 8px;
    border-radius: 4px;
    overflow: hidden;
    display: none;
    @media (min-width: 992px){
        display: block;
    }
`;

export {DescriptionWithCarouselWrapper, HeaderWrapper, DetailsWrapper, TabsWrapper, Capsule, Description, ImgHolder};