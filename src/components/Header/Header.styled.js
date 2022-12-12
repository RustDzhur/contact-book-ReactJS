import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
  @media screen and (max-width: 620px){
    justify-content: center;
  }
`;

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

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const SignUp = styled(NavLink)`
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
  margin-right: 15px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  :hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  @media screen and (max-width: 340px){
    padding: 15px 25px;
  }
`;

export const SignIn = styled(NavLink)`
  background-image: linear-gradient(
    to right,
    #1d976c 0%,
    #93f9b9 51%,
    #1d976c 100%
  );
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  @media screen and (max-width: 340px){
    padding: 15px 25px;
  }
`;
