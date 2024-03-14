import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getIsRefreshing,
  getUserEmail,
} from '../redux/selectors';

export const useUser = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const email = useSelector(getUserEmail);

  return {
    isLoggedIn,
    isRefreshing,
    email,
  };
};
