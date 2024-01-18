import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

function ContactList({ contacts, onDeleteContact, onEditContact }) {
  return (
    <div>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
          onEdit={onEditContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
