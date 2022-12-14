import { useForm } from 'react-hook-form';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import {registeration} from 'redux/auth/operations'
import { Form, Input, FormTitle, NameInput, Button } from './SignUp.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const signUpModal = document.querySelector('#signup-root');

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { something: "" } });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registeration(data));
  };

  return createPortal(
    <motion.div
      style={{ translateX: '-50%', translateY: '-50%' }}
      className="signUpModal"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <FormTitle>Registration form</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <NameInput>Name</NameInput>
        <Input type={'text'} {...register('name', { required: true })} />
        <NameInput>Email</NameInput>
        <Input type={'email'} {...register('email', { required: true })} />
        <NameInput>Password</NameInput>
        <Input
          type={'password'}
          {...register('password', { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button type="submit">Submit</Button>
      </Form>
    </motion.div>,
    signUpModal
  );
};
