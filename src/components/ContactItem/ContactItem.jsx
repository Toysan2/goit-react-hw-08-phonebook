import React from 'react';
import { useSelector } from 'react-redux';
import myAPI from '../myAPI/myAPI';

function ContactItem({ contact, onDeleteContact }) {
  const token = useSelector(state => state.auth.token);

  const handleDelete = async () => {
    if (token) {
      try {
        await myAPI.deleteContact(contact.id, token);
        onDeleteContact(contact.id);
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  return (
    <div>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ContactItem;
