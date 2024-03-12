import { EmailInput, PasswordInput } from 'components/input/inputs';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/selectors';
import { login } from '../../redux/userOperations';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(getUserData);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePassChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    const loginUser = {
      email,
      password,
    };

    try {
      await dispatch(login(loginUser));
      console.log('Użytkownik został pomyślnie zalogowany!');
    } catch (error) {
      console.error('Błąd podczas logowania użytkownika:', error);
    }

    setEmail('');
    setPassword('');
    event.target.reset();
  };

  useEffect(() => {
    console.log('User:', user.user);
    console.log('Token', user.token);
    console.log(user);
  }, [user]);

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <EmailInput as={Input} onChange={handleEmailChange} />
        <PasswordInput as={Input} onChange={handlePassChange} />
        <button type="submit">Submit</button>
      </Form>
    </section>
  );
};
