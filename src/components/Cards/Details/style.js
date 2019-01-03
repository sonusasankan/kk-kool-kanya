import styled from 'styled-components';

import Color from '../../../themes/color';


export const DetailsWrapper = styled.div`
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    // justify-content: ${props => (props.center? "center": "left" )}
`;

export const Details = styled.div`
    color: ${Color.fontLight};
    font-size: 0.875rem;
    text-align: ${props => (props.center? "center": "left" )}
`;

export const Icon = styled.span`
    color: ${Color.fontLight};
    margin-right: 4px;
`;
