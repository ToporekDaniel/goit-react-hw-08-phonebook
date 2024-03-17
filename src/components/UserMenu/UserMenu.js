import { logout } from '../../redux/user/userOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/selectors';
import styled from 'styled-components';
import { NormalButton } from 'components/buttons/NormalButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

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
    <Container>
      {email && <p>{email}</p>}
      <NormalButton onClick={handleLogout}>Logout</NormalButton>
    </Container>
  );
};
