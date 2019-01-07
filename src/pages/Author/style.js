import styled from 'styled-components';
import Colors from '../../themes/color';

const AuthorDetailsHeader = styled.section`
    .kk-author-detail{
        &__author{
            display: flex;
            flex-direction: column;
            @media(min-width: 768px){
                flex-direction: row;
            }
            &__count{
                color: ${Colors.secondaryDarkGray};
            }
            &__details{
                p{
                    margin: 1rem 0 1.25rem 0;
                    color: ${Colors.secondaryLightGray};
                }
            }
            &__desc{
                margin-top: 2rem;
                @media (min-width: 768px){
                    margin-top: 0;
                }
            }
            &__designation{
                margin-bottom: 1rem;
                color: ${Colors.secondaryDarkGray};
                @media (min-width: 768px){
                    margin-bottom: 0;
                }
            }
            &__img{
                height: 10rem;
                width: 10rem;
                min-width: 10rem;
                border-radius: 50%;
                overflow: hidden;
                margin: 0 auto;
                @media (min-width: 768px){
                    margin-right: 40px;
                }
            }
            &__title{
                color: ${Colors.secondaryGray};
                @media (min-width: 768px){
                    flex-grow: 1;
                }
                &__wrapper{
                    display: flex;
                }
            }
            &__social{
                display: flex;
                align-items: center;
                &__wrapper{
                    color: ${Colors.secondaryDarkGray};
                }
                a{
                    color: ${Colors.secondaryDarkGray};
                    &:hover{
                        color: ${Colors.brandColor};
                    }
                }
            }
        }
    }
`;

export default AuthorDetailsHeader;