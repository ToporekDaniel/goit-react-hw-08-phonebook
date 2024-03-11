import { NameInput, EmailInput, PasswordInput } from 'components/input/inputs';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../redux/userOperations';
import { getUserData } from '../../redux/selectors';

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
  const user = useSelector(getUserData);

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
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
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

  // sprawdzanie utworzonego usera
  useEffect(() => {
    console.log('User:', user.user);
    console.log('Token', user.token);
    console.log(user);
  }, [user]);

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
