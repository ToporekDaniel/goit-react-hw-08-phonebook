import { ContactList } from './list/list';
import { Filter } from './filter/filter';
import { ContactForm } from './form/form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilteredContacts } from '../redux/selectors';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../redux/asyncOperations';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = filterValue => {
    dispatch(setFilter(filterValue));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList con={filteredContacts} onDelete={handleDelete} />
    </>
  );
};
