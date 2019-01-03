import styled from 'styled-components';

import Color from '../../../themes/color';

const Description = styled.p`
    margin-top: 16px;
    margin-bottom: 0;
    line-height: 1.44;
    color: #4f565e;
    font-size: 1rem;
    .readMore{
        display: inline;
        color: ${Color.brandColor};
        font-weight: 600;
        cursor: pointer;
    }    
`;

export default Description;
