import {Header } from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
