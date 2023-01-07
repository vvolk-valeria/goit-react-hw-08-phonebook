import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import { Box } from '../../Box';
import { Btn , Title} from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut());

    return (
         <Box display="flex" align-items="center">
  <Title>Welcome, {user.name}</Title>
  <Btn type="button" onClick={handleLogOut}>Logout</Btn>
</Box>

    )

}