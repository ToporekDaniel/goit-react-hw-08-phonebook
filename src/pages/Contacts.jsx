import { ContactForm } from 'components/Forms/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/List/List';

export const Contacts = () => {
  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </main>
  );
};
