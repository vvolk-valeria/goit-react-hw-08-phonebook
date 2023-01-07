import { useDispatch } from 'react-redux';
import {
  FormContainer,
  Label,
  Btn,
  Input,
} from './LoginForm.styled';
import { logIn } from '../../redux/auth/operations';
import { Box } from '../../Box';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Box>
      <Label htmlFor="email">
        Email
      </Label>
        <Input type="email" name="email" />
      <Label htmlFor="password">
        Password
        </Label>
        <Input type="password" name="password" />
          <Btn type="submit">Log In</Btn>
          </Box>
    </FormContainer>
  </>
  );
};
