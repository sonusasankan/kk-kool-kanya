import styled from 'styled-components';

const CarouselWrapper = styled.div`
    .featured-categories{
        &.owl-theme{
            .owl-nav{
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                width: 100%;
                display: flex;
                justify-content: space-between;
                .owl-prev,
                .owl-next{
                    background-color: red;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    display: none;
                }
            }
            .owl-item{
                .item{
                    border-radius: 5px;
                    overflow: hidden;
                }
            }
        }
    }
    .owl-carousel .owl-stage-outer{
        padding-top: 16px!important;
        margin-top: -16px!important;
    }

    //for article cards
    .article-card{
        margin-bottom: 0;
    }
`;

export default CarouselWrapper;