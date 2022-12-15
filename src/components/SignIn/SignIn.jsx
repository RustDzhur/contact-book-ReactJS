import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import { FormTitle } from './SignIn.styled';
import { MotionAnimation } from 'components/MotionAnimation/MotionAnimation';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
const signInModal = document.querySelector('#signin-root');

export const SignIn = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = data => {
    dispatch(logIn(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
      reset({
        email: '',
        password: '',
      });
    }
  }, [isLoggedIn, navigate, reset]);

  return createPortal(
    <MotionAnimation>
      <FormTitle>Login form</FormTitle>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
    </MotionAnimation>,
    signInModal
  );
};
