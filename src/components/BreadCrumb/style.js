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
        a{
            color: #acacac;
        }
        &:nth-last-child(1){
            padding-right: 0;
            font-weight: 600;
            color: #4f565e;
            &::after{
                display: none
            }
        }
    }
`;

export default BreadCrumb;
