import styled from 'styled-components';
import Color from '../../themes/color';

const DropdownWrapper = styled.div`
    .Dropdown-control{
        border: none;
        background-color: rgba(255,255,255,0);
        padding: 0 24px 0 0;
    }
    .Dropdown-placeholder{
        border-bottom: 1px solid ${Color.secondaryLightGray};
        min-width: 9.5rem
    }
    .Dropdown-arrow{
        top: 50%;
        transform: translateY(-50%);
    }
    .Dropdown-placeholder{
        color: ${Color.secondaryLightGray};
    }
    .Dropdown-menu{
        border-radius: 4px;
        border: none;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.12);
        .Dropdown-option{
            font-size: 0.875rem;
        }
        .is-selected{
            background-color: ${Color.brandColor};
            color: #FFF;
        }
    }
    .Dropdown-arrow-wrapper{
        position: absolute;
        top: 0;
        right: 0;
    }
`;

export default DropdownWrapper;