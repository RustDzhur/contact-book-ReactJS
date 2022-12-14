import { ButtonWrapper } from './AuthNav.styled';
import { Register, LogIn } from 'components/Buttons';
export const AuthNav = () => {
  return (
    <ButtonWrapper>
      <Register/>
      <LogIn/>
    </ButtonWrapper>
  );
};
