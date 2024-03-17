import { EmailInput, PasswordInput } from 'components/Inputs/Inputs';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/userOperations';
import { SubmitButton } from 'components/buttons/SubmitButton';

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePassChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

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

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <EmailInput as={Input} onChange={handleEmailChange} />
        <PasswordInput as={Input} onChange={handlePassChange} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </section>
  );
};
