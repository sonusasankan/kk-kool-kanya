import styled from 'styled-components';

const Image = styled.div`
    position: relative;
    z-index: 0;
    img{
        width: 100%;
    }
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 4px 4px 0 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0.75) 0%,rgba(255, 255, 255, 0) 40%);
        transition: all 0.2s ease-out;
        z-index: 1;
    }
`;

export default Image;
