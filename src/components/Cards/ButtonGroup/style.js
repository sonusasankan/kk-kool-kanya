import styled from 'styled-components';

const ButtonGroup = styled.div`
    display: flex;
    margin: 0 -16px;
    position: relative;
    bottom: -8px;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    button{
        flex-grow: 1;
        display: block;
        margin: 0;
        border-radius: 0;
        font-size: 12px;
        padding: 8px 0;
        text-align: center;
        min-height: 34px;
        ${props => (props.split ? `max-width: ${100 / props.split}%` : '')};
    }
`;

export default ButtonGroup;
