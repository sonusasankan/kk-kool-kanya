import styled from 'styled-components';

const FilterWrapperOuter = styled.div`
    @media (max-width: 767px){
        background-color: #FFF;
        width: calc(100vw + 30px);
        height: calc(100vh - 66px);
        position: fixed;
        top: 66px;
        left: 0;
        padding: 0 15px;
        z-index: 3;
        display: none;
        &.show{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        margin-left: -15px;
        margin-right: -15px;
        &::before{
            content: "";
            height: 100vh;
            width: 100vw;
            background-color: #FFF;
            position: absolute;
            top: -66px;
            left: 15px;
        }
        &>div{
            position: relative;
            z-index: 2; 
        }
    }
    .kk-filters-wrapper{
        .kk-filter-btn{
            @media (max-width: 767px){
                padding-left: 16px;
            }
        }
        .custom-checkbox{
            .custom-control-label{
                &::before{
                    right: -0.5rem;
                }
                &::after{
                    right: -0.5rem!important;
                }
            }
        }
    }
    .kk-filter-wrapper-buttons{
        button{
            font-size: 1rem;
            padding: 0.5rem;
            background-color: #F0F0F0;
            border: 1px solid #e2e2e2;
            &.dark{
                background-color: #8c8c8c;
                border: 1px solid #8c8c8c;
                color: #FFF;
            }
        }
    }
`;

const SortingWrapperMobile = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    display: none;
    background-color: #FFF;
    z-index: 99;
    ul{
        background-color: #FFF;
        position: relative;
        margin-bottom: 0;
        z-index:99;
        li{
            padding: 16px;
            border-top: 1px solid gray;
        }
    }
    .kk-sort-filters__bg{
        position: fixed;
        height: 100vh;
        width: 100vw;
        bottom: 0;
        left: 0;
        display: none;
        background-color: rgba(0,0,0,0.5);
        z-index: 98;
    }
    .kk-tab-list-btn{
        font-size: 1rem;
    }
    &.show{
        display: block;
        .kk-sort-filters__bg{
            display: block;
        }
    }
`;

export {FilterWrapperOuter, SortingWrapperMobile};