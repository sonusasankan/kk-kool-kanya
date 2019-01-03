import styled from 'styled-components';

const TextMuted = styled.div`
    display: flex;
    flex-wrap: wrap;
    span{
        position: relative;
        color: #9b9b9b;
        font-size: 14px;
        margin-left: 20px;
        &::after{
            content: "";
            display: block;
            height: 4px;
            width: 4px;
            border-radius: 50%;
            background-color: #9b9b9b;
            position: absolute;
            left: -12px;
            top: 9px;        
        }
        &:nth-child(1){
            margin-left: 0;
            &::after{
                display: none;
            }
        }
    }
`;
export default TextMuted;