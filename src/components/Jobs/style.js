import styled from 'styled-components';
import Colors from '../../themes/color';

const JobCardWrapper = styled.div`
    .kk-card__job{
        box-shadow: none;
        flex-direction: row;
        .kk-card__logo{
            min-width: 56px;
            width: 56px;
            height: 56px;
            margin-right: 1rem;
            @media (min-width: 768px){
                margin-right: 1.5rem;
            }
        }
        .kk-card__header{
            padding: 0;
        }
        .kk-card__title{
            height: initial;
            margin: 0;
        }
        .kk-card__body{
            margin-left: 0;
            padding: 0;
        }
        .kk-card__details__wrapper{
            .kk-card-details__wrapper{
                padding: 0.5rem 10px 0 10px;
                position: relative;
                @media (min-width: 768px){
                    padding: 0 18px 0 18px;
                }
                &::after{
                    content: "";
                    display: block;
                    height: 4px;
                    width: 4px;
                    border-radius: 50%;
                    background-color: ${Colors.tertiaryGray};
                    position: absolute;
                    right: -2px;
                    top: 10px;
                }
                &:first-child{
                    padding-left: 0;
                }
                &:last-child{
                    padding-right: 0;
                    &::after{
                        display: none;
                    }
                }
            }
        }
        .kk-view-more{
            color: ${Colors.brandColor};
            font-weight: 600;
            @media (min-width: 768px){
                min-width: 100px;
            }
            &__vm{
                &-indicator{
                    position: relative;
                    transition: all 0.2s ease-out;
                    right: 0;
                }
                &:hover{
                    .kk-view-more__vm-indicator{
                        right: -0.2rem;
                    }
                }
            }
        }
    }
`;

export default JobCardWrapper;