import { ContactForm } from 'components/Forms/ContactForm';
import { Filter } from 'components/filter/filter';
import { ContactList } from 'components/list/list';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../redux/asyncOperations';
import { setFilter } from '../redux/filterSlice';
import { getContacts, getFilteredContacts } from '../redux/selectors';

export const Contacts = () => {
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
    <main>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleSubmit} />
      <h3>Contacts</h3>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList con={filteredContacts} onDelete={handleDelete} />
    </main>
  );
};
