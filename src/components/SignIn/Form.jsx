import { FormStyle, Input, NameInput, Button } from './SignIn.styled';

export const Form = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <NameInput>Email</NameInput>
      <Input type={'email'} {...register('email', { required: true })} />
      <NameInput>Password</NameInput>
      <Input type={'password'} {...register('password', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <Button type="submit">Log in</Button>
    </FormStyle>
  );
};
