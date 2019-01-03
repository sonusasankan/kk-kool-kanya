import styled from 'styled-components';
import Colors from '../../themes/color';

const Wrapper = styled.div`
    position: realtive;
    @media (max-width: 767px){
        margin-bottom: 2rem;
    }

    .kk-recommended-dropdown{
        background-color: #FFF;
        border: none;
        color: #703db2;
        padding: 0.875rem 1rem;
        border-radius: 0.25rem;
        width: 100%;
        box-shadow: 0px 4px 15px rgba(0,0,0,0.07);
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        position: relative;
        z-index: 3;
        @media (min-width: 768px){
            display: none;
        }
        @media (max-width: 767px){
            &-list{
                background-color: #FFF;
                z-index: 2;
                width: 100%;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
                &--close{
                    display: none;
                }
            }
        }
    }
    
    .kk-tab-list-btn{
        cursor: pointer;
        position: relative;
        color: #4f565e;
        border-color: ${Colors.brandColor};
        font-size: 17px;
        &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 98%;
            width: 3px;
            border-radius: 2px;
            background-color: ${Colors.brandColor};
            opacity: 0;
            transition: opacity 0.3s ease-in-out;

        }
        &.current, &:hover{
            color: ${Colors.brandColor};
            &:before{
                opacity: 1;
            } 
        }
    }
`;

export default Wrapper;