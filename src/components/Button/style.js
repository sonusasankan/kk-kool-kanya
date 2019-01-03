import styled from 'styled-components';
import { colors } from '../../themes';

export const StyledButton = styled.button`
    background: ${props => (props.primary ? `${colors.primary}` : 'none')};
    color: ${props => (props.primary ? '#fff' : '#703db2')};
    font-size: 1em;
    margin: ${props => (props.isAlignRight ? '0' : '')};
    padding:${props => (props.isAlignRight ? '0' : '0.50em 1.5em')};
    min-height: 50px;
    border: ${props => (props.hasBorder ? '2px solid #703db2' : 'none')}
    border-radius:${props => (props.curved ? '20px' : '3px')};
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover{
    background-color: ${props => (props.primary ? `${colors.primaryDark}` : `${colors.primary}`)};
    color: #fff;
    border-color: ${props => (props.primary ? `${colors.primaryDark}` : `${colors.primary}`)};
    }
    &.kk-has-icon{
    &.hovered{
        background: transparent;
        color: ${colors.primary} 
        .icon{
        transition: all 0.50s ease-in-out;
        opacity: 0;
        transform: translateX(20px) scale(1.5);
        }
    }
    &.leave{
        .icon{
        transition: all 0.50s ease-in-out;
        opacity: 1;
        transform: translateX(0px);
        }
    }
    .icon{
        vertical-align: middle;
        width: 20px;
    }
    }
    &.curved{
        border-radius: 50px;
    }
    &.no-bg-hover{
        &:hover{
            background-color: transparent;
            color: ${colors.primary} 
        }
    }
`;
