import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { getFilteredContacts } from '../../redux/selectors';
import Modal from 'components/EditModal/EditModal';
import { EditForm } from 'components/Forms/EditForm';
import styled from 'styled-components';
import { NormalButton } from 'components/buttons/NormalButton';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

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
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Number</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => (
            <tr key={contact.id}>
              <Td>{contact.name}</Td>
              <Td>{contact.number}</Td>
              <Td>
                <NormalButton onClick={() => handleDelete(contact.id)}>
                  Delete Contact
                </NormalButton>
                <NormalButton onClick={() => handleEdit(contact.id)}>
                  Edit Contact
                </NormalButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
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
