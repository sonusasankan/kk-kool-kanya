import styled from 'styled-components';
import Colors from '../../themes/color';

const ContentWrapper = styled.div`
    padding: 2.5rem 1rem;
    background-color: #FFF;
    box-shadow: 0 2px 8px 0 rgba(52, 52, 53, 0.19);
    @media (min-width: 768px){
        padding: 2.5rem;
    }
    .kk-account{
        padding-bottom: 2.5rem;
        h3{
            margin-bottom: 2.5rem;
        }
        strong{
            font-size: 1.125rem;
            font-weight: 600;
            display: block;
            margin-bottom: 12px;
        }
        label{
            margin-bottom: 24px;
            width: 100%;
            max-width: 468px;
            div{
                color: rgba(0, 0, 0, 0.56);
            }
        }
        input[type="email"]{
            background-color: #f8f8f8;
            border-radius: 4px;
            padding: 12px 16px;
            border: none;
            width: 100%;
        }
        input[type="password"]{
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 4px;
            padding: 8px 16px;
            color: ${Colors.secondaryGray};
            margin-top: 12px;
        }
        a{
            font-weight: 600;
        }
    }

    .kk-notifications{
        padding: 2.5rem 0;p{
            margin-bottom: 32px;
        }

        &__sub{
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 20px;
        }
        .kk-options{
            display: flex;
            color: rgba(0, 0, 0, 0.54);
            justify-content: space-between;
            max-width: 468px;
            &__text{
                max-width: 200px;
                background-color: red;
            }
        }
        .kk-btn-wrapper{
            border-radius: 4px;
            overflow: hidden;
            min-width: 96px;
            height: 36px;
            button{
                border: none;
                padding: 6px 14px;
                cursor: pointer;
                &.active{
                    background-color: ${Colors.primaryGreen};
                    color: #FFF;
                }
            }
        }
    }
    .kk-cta-row{
        margin-top: 2.5rem; 
        button{
            min-width: 100% !important;
            @media (min-width: 768px){
                min-width: 148px !important;
            }
        }
    }
`;

export default ContentWrapper;