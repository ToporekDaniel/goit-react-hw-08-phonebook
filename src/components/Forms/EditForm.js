import React, { useState } from 'react';
import styled from 'styled-components';
import { NameInput, TelInput } from '../Inputs/Inputs';
import PropTypes from 'prop-types';
import { editContact } from '../../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

const SubmitButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const Form = styled.form``;

export const EditForm = ({ contactId, closeModal, originalContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState(originalContact ? originalContact.name : '');
  const [number, setNumber] = useState(
    originalContact ? originalContact.number : ''
  );

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleTelChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.id !== contactId
    );

    // Jeśli istnieje kontakt o takim samym imieniu i różnym ID, zgłoś błąd
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(editContact({ contactId, name, number }));
    event.target.reset();
    closeModal();
  };

  return (
    <>
      <p>Original Name: {originalContact.name}</p>
      <p>Original Number: {originalContact.number}</p>

      <Form onSubmit={handleSubmit}>
        <NameInput onChange={handleNameChange} />
        <TelInput onChange={handleTelChange} />
        <SubmitButton type="submit">Confirm Edit</SubmitButton>
      </Form>
    </>
  );
};

EditForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
