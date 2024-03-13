import styled from 'styled-components';
import { NameInput, TelInput } from '../input/inputs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

const SubmitButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const Form = styled.form``;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleTelChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <NameInput onChange={handleNameChange} />
      <TelInput onChange={handleTelChange} />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
