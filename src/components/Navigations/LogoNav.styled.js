import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 15px;
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