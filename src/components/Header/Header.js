import { SignUp, SignIn } from './Header.styled';
import {
  HeaderDox,
  Wrapper,
  Logo,
  ContactBookText,
  ButtonWrapper,
  NavLogo,
} from './Header.styled';
import logo from 'images/logo.png';
import { Video } from '../Hero/Video';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <HeaderDox>
        <Wrapper>
          <NavLogo to="/">
            <Logo src={logo} alt="logo" />
            <ContactBookText>Contact book</ContactBookText>
          </NavLogo>
          <ButtonWrapper>
            <SignUp to="/signup">Sign Up</SignUp>
            <SignIn to="/signin">Sign In</SignIn>
          </ButtonWrapper>
        </Wrapper>
        <Video />
      </HeaderDox>
      <Outlet />
    </>
  );
};
