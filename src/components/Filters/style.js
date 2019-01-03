import styled from 'styled-components';
import Colors from '../../themes/color';

const FitlerWrapper = styled.div`
    .kk-filter-head{
        @media (max-width: 767px){
            padding: 0 15px;
        }
    }
    .kk-filters{
        display: block;
    }
    svg{
        transform: rotate(270deg);
        opacity: 1;
        @media (min-width: 768px){
            transform: rotate(0deg);
        }
    }
    .hide{
        .kk-filters{
            display: none;
        }
        svg{
            opacity: 0;
            @media (min-width: 768px){
                opacity: 1;
                transform: rotate(180deg);
            }
        }
    }
    .kk-filter-item__show-more{
        margin-left: 1.5rem;
        background-color: transparent;
        cursor: pointer;
        border: none;
        color: ${Colors.brandColor};
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }
    .show-all{
        .kk-filter-item__show-more{
            display: none;
        }
        .collapse{
            display: block;
        }
    }
    .input-range{
        left: 0.5rem;
        width: 89%;
        margin-bottom: 2.5rem;
        @media (max-width: 767px){
            left: 0.5rem;
            width: 83%;
            margin-bottom: 2.5rem;
            margin-left: 8px;
            padding-top: 2rem;
        }
    }
    .input-range__label-container{
        display: none;
    }
    .input-range__slider-container{
        .input-range__label-container{
            display: block;
            bottom: -2rem;
        }
    }
    .input-range__slider{
        background-color: ${Colors.brandColor} !important;
        border: none;
    }
    .input-range__track--active{
        background-color: ${Colors.brandColor} !important;
    }
`;
export default FitlerWrapper;