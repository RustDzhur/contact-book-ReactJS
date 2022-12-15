import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useAuth } from 'hooks/useAuth';
import { registeration } from 'redux/auth/operations';
import { FormTitle } from './SignUp.styled';
import { Form } from './Form';
import { MotionAnimation } from 'components/MotionAnimation/MotionAnimation';
const signUpModal = document.querySelector('#signup-root');

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', email: '', password: '' } });

  const onSubmit = data => {
    dispatch(registeration(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
      reset({ name: '', email: '', password: '' });
    }
  }, [isLoggedIn, navigate, reset]);

  return createPortal(
    <MotionAnimation>
      <FormTitle>Registration form</FormTitle>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
    </MotionAnimation>,
    signUpModal
  );
};
