import { SignUp, SignIn } from './Header.styled';
import {
  HeaderDox,
  Wrapper,
  LogoWrapper,
  Logo,
  ContactBookText,
  ButtonWrapper,
} from './Header.styled';
import logo from 'images/logo.png';
import { Video } from '../Hero/Video';

export const Header = () => {
  return (
    <>
      <HeaderDox>
        <Wrapper>
          <LogoWrapper>
            <Logo src={logo} alt="logo" />
            <ContactBookText>Contact book</ContactBookText>
          </LogoWrapper>
          <ButtonWrapper>
            <SignUp to="/singup">Sign Up</SignUp>
            <SignIn to='/signin'>Sign In</SignIn>
          </ButtonWrapper>
        </Wrapper>
      </HeaderDox>
      <Video />
    </>
  );
};
