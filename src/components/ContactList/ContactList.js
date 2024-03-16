import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contactsOperations';
import { useEffect } from 'react';
import { getFilteredContacts } from '../../redux/selectors';
import Modal from 'components/EditModal/EditModal';
import { EditForm } from 'components/Forms/EditForm';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingContactId, setEditingContactId] = useState(null);

  const handleDelete = id => {
    const shouldDelete = window.confirm(
      'Are you sure you want to delete this contact?'
    );
    if (shouldDelete) {
      dispatch(deleteContact(id));
    }
  };

  const handleEdit = id => {
    setEditModalOpen(true);
    setEditingContactId(id);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>
              Delete Contact
            </button>
            <button onClick={() => handleEdit(contact.id)}>Edit Contact</button>
          </li>
        ))}
      </ul>
      <Modal isOpen={editModalOpen} closeModal={() => setEditModalOpen(false)}>
        <EditForm
          originalContact={filteredContacts.find(
            contact => contact.id === editingContactId
          )}
          contactId={editingContactId}
          closeModal={() => setEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

ContactList.propTypes = {
  con: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
