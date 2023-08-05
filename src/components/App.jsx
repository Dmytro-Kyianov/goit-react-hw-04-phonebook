import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLocalStorage } from 'Hooks/useLocalStorage';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const key = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(key, []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contactData = {
      name,
      number,
      id: nanoid(),
    };
    setContacts([contactData, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterContact = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm contacts={contacts} addContact={addContact} />
      <Filter filter={filterContact} value={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};