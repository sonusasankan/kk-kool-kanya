import styled from 'styled-components';

const FavButton = styled.button`
  ${props => ((props.top || props.right || props.bottom || props.left) ? 'position: absolute' : '')};
  ${props => (props.top ? 'top: 1rem' : '')};
  ${props => (props.right ? 'right: 1rem' : '')};
  ${props => (props.bottom ? 'bottom: 1rem' : '')};
  ${props => (props.left ? 'left: 1rem' : '')};
  color: #FFF;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
  padding: 0;
  height: 24px;
  width: 24px;
  transition: 0.1s ease-out;
  &:focus{
    outline: none;
  }
  &.hovered{
    transform: scale(1.1);
  }
`;

export default FavButton;
