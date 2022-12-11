import styled from '@emotion/styled';

export const HeaderDox = styled.header`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 20px;
`;

export const ContactBookText = styled.p`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 24px;
  font-weight: 700;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
