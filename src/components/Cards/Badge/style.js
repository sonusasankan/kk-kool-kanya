import styled from 'styled-components';

export const BadgeWrapper = styled.div`
    ${props => ((props.top || props.right || props.bottom || props.left) ? 'position: absolute' : '')};
    ${props => (props.top ? 'top: 1rem' : '')};
    ${props => (props.right ? 'right: 1rem' : '')};
    ${props => (props.bottom ? 'bottom: 1rem' : '')};
    ${props => (props.left ? 'left: 1rem' : '')};
    z-index: 2;
`;

export const Badge = styled.div`
    display: inline-block;
    height: 24px;
    width: 24px;  
    position: relative;
    img{
        width: 100%;
    }
    margin-left: -10px;
    &:nth-child(1){
        margin-left: 0;
    }
`;
