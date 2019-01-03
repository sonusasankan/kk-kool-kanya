import styled from 'styled-components';

const JobCardWrapper = styled.div`
    @media (min-width: 768px){
        margin-left: 22px;
    }

    .kk-card-details__wrapper{
        margin-bottom: 16px;
    }
    .kk-card__job{
        border-radius: 0;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 37px;
    }
    .kk-section-title{
        font-size: 1.125rem;
    }
`;

const JobLandingWrapper = styled.div`
    .kk-section-title{
        font-size: 1.5rem;
    }
    .kk-text-small-light{
        font-size: 1.125rem;
    }
`;

export {JobLandingWrapper, JobCardWrapper};