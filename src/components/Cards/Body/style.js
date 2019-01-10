import styled from 'styled-components';

const Body = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  width: 100%;
  &.overlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0);
    padding: 0;
    display: flex;
    align-items: flex-end;
    .kk-card__text-wrapper{
      padding:  16px !important;
      background-color: rgba(0,0,0,0)!important;
      color: #fff;
      p{
        margin-bottom: 0;
      }
    }
    .kk-card__title{
      margin: 0;
      font-size: 1.125rem;
    }
  }
`;

export default Body;
