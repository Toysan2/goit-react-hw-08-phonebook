import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import myAPI from '../myAPI/myAPI';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const fetchContacts = async () => {
      if (token) {
        const fetchedContacts = await myAPI.fetchContacts(token);
        setContacts(fetchedContacts);
      }
    };
    fetchContacts();
  }, [token]);

  const handleAddContact = async newContactData => {
    if (token) {
      const addedContact = await myAPI.addContact(newContactData, token);
      if (addedContact) {
        const updatedContacts = await myAPI.fetchContacts(token);
        setContacts(updatedContacts);
      }
    }
  };

  const handleDeleteContact = async contactId => {
    if (token) {
      await myAPI.deleteContact(contactId, token);
      console.log('Contact deleted, fetching updated list...');
      const updatedContacts = await myAPI.fetchContacts(token);
      console.log('Updated contacts:', updatedContacts);
      setContacts(updatedContacts);
    }
  };

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default Contacts;
