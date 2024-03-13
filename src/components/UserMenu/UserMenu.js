import { logout } from '../../redux/userOperations';
import { getUserData } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();

  const handleLogout = async event => {
    try {
      await dispatch(logout());
      console.log('Użytkownik został pomyślnie wylogowany!');
    } catch (error) {
      console.error('Błąd podczas tworzenia użytkownika:', error);
    }
  };

  return (
    <div>
      <div>
        <p>{user.user.name}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
