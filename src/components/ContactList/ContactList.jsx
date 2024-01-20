import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { VStack } from '@chakra-ui/react';

function ContactList({ contacts, onDeleteContact, onEditContact }) {
  return (
    <VStack spacing={4} align="stretch">
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
          onEdit={onEditContact}
        />
      ))}
    </VStack>
  );
}

export default ContactList;
