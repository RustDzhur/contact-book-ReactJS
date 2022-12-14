import { UserMenuStyles, WelcomeText } from './UserMenu.styled';
import { LogOut } from 'components/Buttons';
import { useAuth } from 'hooks/useAuth';
export const UserMenu = () => {
  const { user } = useAuth();
  return (
    <UserMenuStyles>
      <WelcomeText style={{ color: 'white' }}>Welcome, {user.name}</WelcomeText>
      <LogOut />
    </UserMenuStyles>
  );
};
