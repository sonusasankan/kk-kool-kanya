import styled from 'styled-components';
import Colors from '../../themes/color';

const ListWrapper = styled.ul`
    line-height: 24px;
    color: ${Colors.secondaryLightGray};
    li{
        padding-left: 1rem;
        position: relative;
        margin-bottom: 1.5rem;
    }
    li::before{
        content: "";
        background-color: ${Colors.secondaryDarkGray};
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-left: -1em;
        position: absolute;
        top: 10px;
    }
`;

const JobCardWrapper = styled.div`
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid #f0f0f0;
    .kk-card__job{
        margin: 0;
    }
`;


export {ListWrapper, JobCardWrapper};