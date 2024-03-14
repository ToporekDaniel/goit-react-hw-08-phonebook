import { Navigate } from 'react-router-dom';
import { useUser } from './hook';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useUser();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
