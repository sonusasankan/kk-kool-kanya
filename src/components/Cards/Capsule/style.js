import styled from 'styled-components';
import Color from '../../../themes/color';

const Capsule = styled.div`
    height: 72px;
    border-radius: 36px;
    padding: 16px;
    display: inline-flex;
    align-items: center;
    font-height: 1.125rem;
    background-color: #efeff5;
    cursor: pointer;
    .capsule{
        &__title{
            margin-left: 1rem;
        }
        &__img__wrapper{
            height: 44px;
            width: 44px;
            border-radius: 44px;
            overflow: hidden;
        }
    }
    &.selected{
        background-color: ${Color.brandColor};
        color: #FFF;
    }
`;

export default Capsule;