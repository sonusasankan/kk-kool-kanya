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
        h4{
            margin-bottom: 20px;
        }
        .kk-options{
            display: flex;
            color: rgba(0, 0, 0, 0.54);
            justify-content: space-between;
        }
        .kk-btn-wrapper{
            border-radius: 4px;
            overflow: hidden;
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
            min-width: 148px;
        }
    }
`;

export default ContentWrapper;