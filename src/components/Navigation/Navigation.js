import { useAuth } from "../../hooks/useAuth";
import { LinkItem } from "../AppBar/AppBar.styled";
import { Box } from '../../Box';

export const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return (
         <Box display="flex" >
            <LinkItem to="/">
               Home 
            </LinkItem>
            {isLoggedIn &&
                <LinkItem to="/contacts">
                    Phonebook
                </LinkItem>
            }
        </Box>
    )
}