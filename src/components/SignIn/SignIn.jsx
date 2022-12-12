import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Form, Input, FormTitle, NameInput, Button } from './SignIn.styled';
const signInModal = document.querySelector('#signin-root');

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return createPortal(
    <motion.div
      style={{ translateX: '-50%', translateY: '-50%' }}
      className="signInModal"
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
      <FormTitle>Login form</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <NameInput>Email</NameInput>
        <Input type={'email'} {...register('email', { required: true })} />
        <NameInput>Password</NameInput>
        <Input
          type={'password'}
          {...register('password', { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button type="submit">Log in</Button>
      </Form>
    </motion.div>,
    signInModal
  );
};
