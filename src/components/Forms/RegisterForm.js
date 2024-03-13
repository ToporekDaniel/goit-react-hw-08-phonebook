import { NameInput, EmailInput, PasswordInput } from 'components/Inputs/Inputs';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../redux/userOperations';

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

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePassChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };

    try {
      await dispatch(createNewUser(newUser));
      console.log('Użytkownik został pomyślnie utworzony!');
    } catch (error) {
      console.error('Błąd podczas tworzenia użytkownika:', error);
    }

    setName('');
    setEmail('');
    setPassword('');
    event.target.reset();
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <NameInput as={Input} onChange={handleNameChange} />
        <EmailInput as={Input} onChange={handleEmailChange} />
        <PasswordInput as={Input} onChange={handlePassChange} />
        <button type="submit">Submit</button>
      </Form>
    </section>
  );
};
