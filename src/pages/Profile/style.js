import styled from 'styled-components';
import Colors from '../../themes/color';

const ContentWrapper = styled.div`
    margin-top: 5rem;
    padding: 2.5rem 1rem;
    background-color: #FFF;
    box-shadow: 0 2px 8px 0 rgba(52, 52, 53, 0.19);
    @media (min-width: 768px){
        padding: 2.5rem;
    }
    .kk-avatar{
        padding-bottom: 2.5rem;
        @media(min-width: 768px){
            display: flex;
        }
        h2{
            @media (min-width: 768px){
                margin-top: 20px;
            }
        }
        &__text{
            text-align: center;
            @media (min-width: 768px){
                text-align: center;
            }
        }
        &__wrapper--inner{
            width: 72px;
            margin: auto;
            position: relative;
            @media (min-width: 768px){
                width: 191px;
                margin: initial;
            }
        }
        .kk-card-details__wrapper{
            justify-content: center;
            @media (min-width: 768px){
                justify-content: flex-start;
            }
        }
    }
    .avatar{
        width: 100%;
        margin-bottom: 1.5rem;
        @media (min-width: 768px){
            width: auto;
            display: inline-flex;
            align-items: flex-start;
            margin-right: 2.5rem;
        }
        &__img{
            height: 72px;
            width: 72px;
            margin: auto;
            @media (min-width: 768px){
                height: 151px;
                width: 151px;
            }
        }
        &+button{
            background-color: #703db2;
            border: 1px solid #FFF;
            color: #fff;
            height: 32px;
            width: 32px;
            border-radius: 24px;
            position: absolute;
            top: 41px;
            left: 41px;
            @media (min-width: 768px){
                top: 120px;
                left: 114px;
            }
            svg{
                position: relative;
                top: -2px;
            }
        }
    }
    .kk-card-details{
        font-size: 1.125rem;
    }

    .kk-interest{
        padding: 2.5rem 1rem 1.5rem 1rem;
        @media (min-width: 768px){
            padding: 2.5rem 2.5rem 1.5rem 2.5rem;
        }
        ul{
            padding-top: 1rem;
            padding-left: 1rem;
            font-size: 18px;
            color: ${Colors.secondaryGray};
            li{
                padding: 1rem 0;
                list-style-type: disc;
            }
        }
    }
    .kk-primary-goals{
        padding: 2.5rem 1rem;
        @media (min-width: 768px){
            padding: 2.5rem;
        }
        h3{
            margin-bottom: 1.5rem;
        }
        .kk-capsule{
            display: inline-block;
            margin-top: 1.5rem;
            margin-right: 11px;
            padding: 10px 30px;
            background-color: #ede0fd;
            border-radius: 1.5rem;
            line-height: normal;
            font-size: 1.125rem;
            button{
                font-size: 1.5rem;
                background: none;
                border: none;
                padding: 0;
                position: relative;
                left: 1rem;
                cursor: pointer
            }
            &.removable{
                background: transparent;
                border: 1px solid #a2a2a2;
            }
        }
    }
    .kk-resume{
        padding: 15px 22px;
        border: 1px solid #fbfbfb;
        border-radius: 6px;
        box-shadow: 0 2px 8px 0 rgba(52, 52, 53, 0.19);
        font-weight: 600;
        &__pdf-icon{
            margin-right: 8px;
            @media (min-width: 768px){
                margin-right: 16px;
            }
            @media (min-width: 992px){
                margin-right: 32px;
            }
        }
        @media (min-width: 992px){
            display: flex;
            justify-content: space-between;
        }
        &__wrapper{
            padding: 2.5rem 1rem;
            @media (min-width: 768px){
                padding: 2.5rem;
            }
            h3{
                margin-bottom: 2.5rem;
            }
        }
        &__name{
            font-size: 1.25rem;
            font-weight: 600;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &+span{
                color: #292929;
                font-weight: normal;
            }
            &__wrapper{
                width: 80%;
            }
        }
        a{
            @media (min-width: 992px){
                display: flex;
                height: 100%;
                align-items: center;
            }
            svg{
                margin-right: 1rem;
            }
        }
        &__upload{
            font-size: 1.125rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 5rem;
        }
    }
    .kk-input{
        margin-bottom: 32px;
        &__label{
            font-weight: 600;
            margin-bottom: 12px;   
            &--dropdown{
                margin-right: 12px;
                @media (min-width: 992px){
                    margin-right: 20px;
                }
            }        
        }
        .Dropdown-placeholder{            
            min-width: 0;
            padding: 6px 0 6px 8px;
            border-bottom: none;
            @media (min-width: 992px){
                padding: 11px 16px;
            }
        }
        .Dropdown-control{
            border: 1px solid rgba(74,74,74,0.3);
            border-radius: 4px;
        }
        input[type="text"]{
            border-radius: 6px;
            border: 1px solid rgba(74,74,74,0.3);
            padding: 10px 16px;
            @media (min-width: 992px){
                min-width: 18rem;
            }
        }
    }
    .kk-list-style-type-none{
        list-style-type: none !important;
    }
    .kk-cta-row{
        button{
            min-width: 148px;
        }
    }
`;

export {ContentWrapper};