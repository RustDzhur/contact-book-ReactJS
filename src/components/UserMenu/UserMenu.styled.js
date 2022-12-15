import styled from '@emotion/styled';

export const UserMenuStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const WelcomeText = styled.p`
  text-transform: uppercase;
  margin-right: 0;
  margin-bottom: 10px;

  font-family: sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  @media screen and (min-width: 700px) {
    margin-right: 40px;
    margin-bottom: 0;
  }
`;
