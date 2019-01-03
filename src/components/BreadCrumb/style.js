import styled from 'styled-components';

const BreadCrumb = styled.nav`
    color: #acacac;
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 1rem 0;
    }
    li{
        position: relative;
        padding-right: 1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 140px;
        &::after{
            content: "";
            display: inline-block;
            width: 5px;
            height: 5px;
            border: 1px solid #8d959d;
            border-width: 1px 1px 0 0;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: rotate(45deg) translateY(-50%);
            right: 0.5rem;
        }
        &:nth-last-child(1){
            padding-right: 0;
            color: #4f565e;
            font-weight: 600;
            &::after{
                display: none
            }
        }
    }
`;

export default BreadCrumb;
