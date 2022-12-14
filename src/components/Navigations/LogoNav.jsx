import { Logo, ContactBookText, NavLogo } from './LogoNav.styled';
import logo from 'images/logo.png';

export const LogoNavToMain = () => {
  return (
    <NavLogo to="/">
      <Logo src={logo} alt="logo" />
      <ContactBookText>Contact book</ContactBookText>
    </NavLogo>
  );
};

export const LogoNavToContacts = () => {
  return (
    <NavLogo to="/contacts">
      <Logo src={logo} alt="logo" />
      <ContactBookText>Contact book</ContactBookText>
    </NavLogo>
  );
};
