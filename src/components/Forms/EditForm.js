import React, { useState } from 'react';
import { NameInput, TelInput } from '../Inputs/Inputs';
import PropTypes from 'prop-types';
import { editContact } from '../../redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { ContactButton } from 'components/buttons/ContactButton';

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
      <form onSubmit={handleSubmit}>
        <p>Original Name: {originalContact.name}</p>
        <NameInput onChange={handleNameChange} />
        <p>Original Number: {originalContact.number}</p>
        <TelInput onChange={handleTelChange} />
        <ContactButton type="submit">Confirm Edit</ContactButton>
      </form>
    </>
  );
};

EditForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
