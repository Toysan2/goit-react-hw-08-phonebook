import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import myAPI from '../myAPI/myAPI';
import { Input } from '@chakra-ui/react'; // Importing Input from Chakra UI

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState(''); // State for the filter text
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

  // Filtering contacts based on the filter text
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <Input
        placeholder="Filter contacts..."
        onChange={e => setFilter(e.target.value)}
        mb={4} // Margin bottom for spacing
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
        onEditContact={handleEditContact}
      />
    </div>
  );
}

export default Contacts;
