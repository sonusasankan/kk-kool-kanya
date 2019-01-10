import styled from 'styled-components';
import Colors from '../../themes/color';

const HeaderWrapper = styled.div`
    z-index: 97;
    nav{
        display: flex;
    }

    .kk-brand-logo{
        flex-grow: 1;
        margin: 16px 0 20px 0;
        &__img{
            display: block;
            min-width: 4rem;
            width: 4rem;
        }
    }
    

    .kk-sidebar__bg{
        background-color: transparent;
        display: none;
        opacity: 0;
        position: fixed;
        height: 100vh;
        width: 100vw;
        left: 0;
        top: 0;
        z-index: 98;
        &.show{
            display: block;
            opacity: 0.25;
        }
    }
    
    .toggleButton{
        font-size: 2rem;
        height: 3rem;
        background-color: transparent;
        border: none;
        @media (min-width: 992px){
            display: none;
        }
    }

    .kk-menu__items{
        position: fixed;
        background-color: ${Colors.brandColor};
        width:80vw;
        max-width: 256px;
        height: 100vh;
        top: 0;
        left: -80vw;
        z-index: 99;
        @media (min-width: 992px){
            position: static;
            background-color: transparent;
            height: auto;
            width: auto;
            max-width: none;
            display: flex;
            align-items: center;
        }
        &.show{
            left:0;
            box-shadow: 8px 0px 120px rgba(0, 0, 0, 0.47);
        }

        .kk-sidebar{
            &__header{
                background-color: #e2e2e2;
                display: flex;
                height: 98px;
                @media (min-width: 992px){
                    display: none;
                }
                &__img{
                    min-width: 96px;
                    width: 96px;
                    padding: 0 1rem;
                    margin: 16px 0 20px 0;
                }
                &__title{
                    display: flex;
                    align-items: center;
                    h3{
                        margin-bottom: 0;
                    }
                }
            }
        }

        ul{
            display: flex;
            flex-direction: column;
            list-style-type: none;
            padding: 0;
            margin-bottom: 0;
            height: calc(100vh - 98px);
            @media (min-width: 992px){
                flex-direction: row;
                height: initial;
            }
            li{
                a{
                    display: block;
                    color: #FFF;
                    padding: 0.8rem 1rem;
                    width: 100%;
                    @media (min-width: 992px){
                        color: ${Colors.secondaryDarkGray};
                    }
                    &:hover{
                        background-color: #FFF;
                        color: ${Colors.brandColor};
                        font-weight: 600;
                        @media (min-width: 768px){
                            background-color: transparent;
                        }
                    }
                    &.active{
                        font-weight: 600;
                        @media (min-width: 992px){
                            color: ${Colors.brandColor};
                        }
                    }
                }
            }
        }
    }
    .kk-header__login{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        flex-grow: 1;
        align-items: flex-end;
        padding-bottom: 8vh;
        @media (min-width: 992px){
            margin: 0 0 0 48px;
            padding-bottom: 0;
        }
        &.link{
            text-align: center;
            padding: 0 0 0 0 !important;
            margin-top:0;
            @media (min-width: 992px){
                padding: 0 0 0 1rem !important;
                margin-left: 0;
            }
            &:hover{
                background-color: transparent !important;
            }
        }
        button{
            min-height: 0;
            min-width: 6rem;
            margin: 0 0 0 0 !important;
            padding: 0.5rem 0 !important;
            color: #FFF;
            border-color: #FFF;
            border-width: 1px;
            border-radius: 50px;
            font-weight: 600;
            transition: none;
            @media (min-width: 992px){
                color: ${Colors.secondaryDarkGray};
                border-color: ${Colors.secondaryDarkGray};
            }
            &:hover{
                color: #FFF;
                @media (min-width: 992px){
                }
            }

        }
        &__signin{
            &:hover{
                backround-color: transparent !important;
            }
            button{
                background-color: transparent;
                &:hover{
                    background-color: ${Colors.brandColor};
                }
            }
        }
    }
    &.invert{
        background: transparent;
        .kk-post-login{
            color: #FFF;
            // &-dropdown{
            //     &__item{
            //         color:
            //     }
            // }
        }
        .kk-brand-logo{
            img{
                filter: invert(100%);
            }
        }
        .kk-menu__items{
            ul li a{
                color: #FFF;
            }
        }
        .kk-header__login{
            button{
                color: #FFF;
                border-color: #FFF;
                &:hover{
                    background-color:#FFF;
                    color: ${Colors.secondaryDarkGray};
                }
            }
        }
        .toggleButton{
            color: #FFF;
        }
    }
`;


const PostLoginWrapper = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    position: relative;
    padding: 0 1rem;
    color: #FFF;
    bottom: 2rem;

    @media (min-width: 992px){
        color: #212121;
        bottom: initial;
    }

    .kk-img-wrapper{
        height: 44px;
        width: 44px;
        border-radius: 50%;
        overflow: hidden;
    }
    .kk-name{
        padding: 0 0.5rem;
        white-space: nowrap;
    }
    .kk-postlogin-dropdown{
        background-color: #FFF;
        position: absolute;
        bottom: 56px;
        left: 1rem;
        border-radius: 4px;
        overflow: hidden;
        width: 100%;
        box-shadow: 0 15px 30px 0 rgba(74, 74, 74, 0.1);
        @media (min-width: 992px){
            bottom: -13.25rem;
        }

        &__item{
            font-size: 0.75rem;
            height: 2.5rem;
            color: ${Colors.secondaryDarkGray} !important;
            border: 1px solid #FFF;
            border-bottom: 1px solid rgba(151, 151, 151, 0.2);
            &:hover{
                border-left: 1px solid ${Colors.brandColor};
                background-color: rgba(237, 224, 253, 0.3) !important;
            }
        }
    }
`;


export {HeaderWrapper, PostLoginWrapper};