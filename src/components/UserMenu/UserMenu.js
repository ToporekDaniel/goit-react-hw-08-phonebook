import { logout } from '../../redux/userOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const email = useSelector(getUserEmail);

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
        {email && <p>{email}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
