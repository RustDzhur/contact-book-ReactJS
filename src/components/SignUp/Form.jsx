import { FormStyles, Input, NameInput, Button } from './SignUp.styled';
export const Form = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <NameInput>Name</NameInput>
      <Input type={'text'} {...register('name', { required: true })} />
      <NameInput>Email</NameInput>
      <Input type={'email'} {...register('email', { required: true })} />
      <NameInput>Password</NameInput>
      <Input type={'password'} {...register('password', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <Button type="submit">Submit</Button>
    </FormStyles>
  );
};
