import { LinkItem } from "../AppBar/AppBar.styled";
import { Box } from '../../Box';

export const AuthNav = () => {
  return (
    <Box  display="flex" >
      <LinkItem  to="/register">
        Register
      </LinkItem>
      <LinkItem to="/login">
        Log In
      </LinkItem>
    </Box>
  );
};