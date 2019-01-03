import styled from 'styled-components';
import Colors from '../../themes/color';


const Footer = styled.footer`
    position: relative;
    padding: 3rem 0 2rem 0;
    background-color: #3d3d5b;
    .kk-footer__bg{
        position: absolute;
        left: 0;
        top: 0;
        &--1{
            position: absolute;
            bottom: 0;
            right:0;
        }
    }
    a{
        color: #FFF;
        position: relative;
        &:hover{

        }
    }
    .kk-footer{
        display: inline-flex;
        padding-right: 4rem;
        @media (min-width: 768px){
            padding-right: 2rem;
        }
        @media (min-width: 992px){
            padding-right: 0rem;
            padding-left: 8rem;
        }
        &__big{
            flex-direction: column;
            font-size: 1.25rem;
            color: #FFF;
            @media (min-width: 992px){
                flex-grow: 1;
                padding: 0;
            }
            div{
                max-width: 260px;
                margin-bottom: 2rem;
            }
            a{
                span{
                    font-weight: 600;
                    font-size: 1rem;
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        display: block;
                        background-color: rgba(255, 255, 255, 0.5);
                        height: 2px;
                        width: 100%;
                    }
                }
                &:hover{
                    color: #FFF;
                    svg{
                        transform: translate(50%);
                    }
                    span{
                        &::before{
                            right: -1rem;
                        }
                        &::after{
                            content: "";
                            background-color: #FFF;
                        }
                    }
                }
            }
        }
        &__nav{
            a{
                color: #7c7c91;
                font-size: 0.75rem;
                display: block;
                margin-top: 0.5rem;
                &:hover{
                    color: #FFF;
                }
            }
            &__head{
                font-size: 0.875rem;
                color: #fff;
                font-weight: 600;
                padding-top: 3rem;
                @media (min-width: 768px){
                    padding-top: 6px;
                }
            }
            &__contact{
                a{
                    display: inline-block;
                }
            }
        }
        &__cp{
            color: #FFF;
            font-size: 0.875rem;
            text-align: center;
            border-top: 1px solid #dcdcdc;
            margin-top: 3rem;
            @media (min-width: 768px){
                display: flex;
                justify-content: space-between;
            }
            div{
                padding: 1rem 0 0 0;
            }
            &__internal{
                padding: 1rem 1rem 0 1rem !important;
                @media (min-width: 768px){
                    display: flex;
                    justify-content: space-between;
                }
                span{
                    font-size: 1.1rem;
                    vertical-align: middle;
                }
            }
        }
    }

`;

export default Footer;