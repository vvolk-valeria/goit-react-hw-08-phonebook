import { useDispatch,useSelector } from 'react-redux';
import {
  FormContainer,
  Label,
  Btn,
  Input,
} from './LoginForm.styled';
import { logIn } from '../../redux/auth/operations';
import { selectError } from "../../redux/auth/selectors";
import { Box } from '../../Box';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  
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
      {error && toast.error(
          `Oops, email or password does not meet the requirements!`
        )}
  </>
  );
};
