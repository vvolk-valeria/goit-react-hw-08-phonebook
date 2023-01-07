import { useDispatch} from 'react-redux';
//import { useSelector } from 'react-redux';
import {
  FormContainer,
  Label,
  Btn,
  Input,
} from './RegisterForm.styled';
import { register } from '../../redux/auth/operations';
import { Box } from '../../Box';
//import { selectError } from "../../redux/auth/selectors";
//import toast from 'react-hot-toast';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Box >
        <Label htmlFor="name">Name </Label>
          <Input
            type="text"
            name="name"
            required
          />
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
      {/* {error && toast.error(
          `Oops, email or password does not meet the requirements!`
        )} */}
   </>
  );
};
