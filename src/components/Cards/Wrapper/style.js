import styled from 'styled-components';

import Colors from '../../../themes/color';

const Wrapper = styled.div`
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    margin: auto;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: none;
    &:hover{
        box-shadow: 2px 2px 16px rgba(0,0,0,0.2);
    }
    .card__description{
        font-size: 0.875rem;
    }

    &.big{
        .kk-card__title{
            font-size: 1.5rem;
        }
        .card__description{
            font-size: 1rem;
        }
    }
    
    &.article-card{
        .kk-card__title{
            min-height: 60px;
            @media (min-width: 768px){
                min-height: 40px;
            }
            @media (min-width: 992px){
                min-height: 60px;
            }
            @media (min-width: 1200px){
                min-height: 40px;
            }
        }
        .card__text-wrapper{
            position: relative;
            background-color: #fff;
            border-radius: 4px 4px 0 0;
            padding: 8px;
        }
        .card__reading-time{
            margin-left: 16px;
        }
    }

    &.landscape{
        flex-direction: row;
        .card__img{
            width: 160px;
            height: 127px;
            display: none;
            @media (min-width: 768px){
                display: block;
            }
        }
        &.hasDescription{
            .card__img{
                display: block;
                min-width: 50%;
                max-width: 200px;
                @media (min-width: 576px){
                    min-width: 200px;
                    max-width: auto;
                    width: 200px;
                }
            }
        }
        .kk-card__body{
            display: flex;
            align-items: center;
            padding: 0;
        }
        .kk-card__text-wrapper{
            border-radius: 4px;
            padding: 16px;
        }
        .kk-card__title{
            margin: auto auto 8px auto;
        }
        .card__author{
            width: auto;
            div{
                width: auto!important;
                white-space: pre-wrap !important; 
            }
        }
        .card__description{
            display: none;
            margin-bottom: 0;
            @media (min-width: 576px){
                display: block;
            }
        }
        .readMore{
            font-size: 1rem;
            margin-top: 12px;
        }
    }
    &.small{
        .card__author{
            width: auto;
            div{
                width: auto!important;
                white-space: pre-wrap !important; 
            }
        }
        .card__reading-time{
            margin-left: 0;
            &::before{
                display: none;
            }
        }
    }
    &.textOverlay{
        .card__img{
            &::after{
                background-image: linear-gradient(rgba(0,0,0,0) 30%,rgba(0, 0, 0, 0.85) 90%);
            }
        }
        .kk-card__title{
            color: #FFF;
            height: auto;
            min-height: 0;
        }
        &:hover{
            .card__img{
                &::after{
                    background-image: linear-gradient(${Colors.primary}, ${Colors.primary});
                    opacity: 0.9;
                }
            }
        }
        p{
            color: #FFF;
        }
    }
    &.hasDescription{
        .card__img{
            
        }
    }
`;

export default Wrapper;
