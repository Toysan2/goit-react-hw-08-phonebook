import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import myAPI from '../myAPI/myAPI';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const token = useSelector(state => state.auth.token);

  const fetchContacts = useCallback(async () => {
    if (token) {
      const fetchedContacts = await myAPI.fetchContacts(token);
      setContacts(fetchedContacts);
    }
  }, [token]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleAddContact = async contactData => {
    await myAPI.addContact(token, contactData);
    await fetchContacts();
  };

  const handleDeleteContact = async contactId => {
    await myAPI.deleteContact(token, contactId);
    await fetchContacts();
  };

  const handleEditContact = async (contactId, contactData) => {
    await myAPI.updateContact(token, contactId, contactData);
    await fetchContacts();
  };

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        onEditContact={handleEditContact}
      />
    </div>
  );
}

export default Contacts;
