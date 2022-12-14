import { HeaderDox, Wrapper } from './Header.styled';
import { Video } from '../Hero/Video';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import {
  LogoNavToMain,
  LogoNavToContacts,
} from 'components/Navigations/LogoNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderDox>
        <Wrapper>
          {isLoggedIn ? <LogoNavToContacts /> : <LogoNavToMain />}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Wrapper>
        <Video />
      </HeaderDox>
      <Outlet />
    </>
  );
};
