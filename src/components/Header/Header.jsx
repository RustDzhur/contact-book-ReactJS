import { Link } from 'react-router-dom';
import {
  HeaderDox,
  Wrapper,
  LogoWrapper,
  Logo,
  ContactBookText,
} from './Header.styled';
import logo from 'images/logo.png';
import { Main } from 'components/Main/Main';

export const Header = () => {
  return (
    <>
      <HeaderDox>
        <Wrapper>
          <LogoWrapper>
            <Logo src={logo} alt="logo" />
            <ContactBookText>Contact book</ContactBookText>
          </LogoWrapper>
          <div>
            <Link to="/singup">Sign Up</Link>
            <Link to="/singin">Sign In</Link>
          </div>
        </Wrapper>
      </HeaderDox>
      <Main/>
    </>
  );
};
