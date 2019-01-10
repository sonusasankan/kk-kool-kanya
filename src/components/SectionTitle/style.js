import styled from 'styled-components';
import Colors from '../../themes/color';

const SectionTitle = styled.div`
    display: ${props=> props.link ? "flex" : ""};
    justify-content: space-between;
    margin: 0 0 2.5rem 0;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
    a{
        font-weight: 600; 
        display: flex;
        align-items: center;
        @media (min-width: 768px){
        }
        .kk-link-text{
            @media(min-width: 768px){
                display: block;
            }
        }
        &:hover{
            svg{
                transform: translateX(50%);
            }
        }
    }

    .kk-supporting-data{
        color: ${Colors.secondaryLightGray};
    }
    h2{
        text-align: ${props=> props.link ? "left" : "center"};
        width: 100%;
        margin-top: 2rem;
        @media (min-width: 768px){
            text-align: left;
            margin-top: 0;
        }
    }
    .kk-home__top__companies{
        @media (max-width: 768px){
            display: none;
        }
    }
`;

export default SectionTitle;