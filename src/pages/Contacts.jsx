import { ContactForm } from 'components/Forms/ContactForm';
import { Filter } from 'components/filter/filter';
import { ContactList } from 'components/list/list';

export const Contacts = () => {
  return (
    <main>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      <ContactList />
    </main>
  );
};
