import styled from 'styled-components';

export const AvatarWraper = styled.a`
  display: inline-flex;
  align-items: center;
  &:hover{
    .avatar{
      &__img{
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
      }
      &__title{
        text-decoration: underline;
      }
    }
  }
`;
export const Image = styled.div`
  min-width: 60px;
  min-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
  }
`;

export const Name = styled.div`
  display: block;
  margin-left: 1rem;
  color: #4f565e;
  font-size: 1.125rem;
`;