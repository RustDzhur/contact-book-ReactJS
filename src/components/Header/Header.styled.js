import styled from '@emotion/styled';

export const HeaderDox = styled.header`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 100%;
  margin-bottom: 15px;
  background-color: inherit;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (max-width: 620px) {
    justify-content: center;
  }
`;

