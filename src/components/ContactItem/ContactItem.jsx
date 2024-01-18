import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ContactItem({ contact, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({
    name: contact.name,
    number: contact.number,
  });

  const handleEditChange = e => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onEdit(contact.id, editedContact);
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <h3>{contact.name}</h3>
          <p>{contact.number}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={editedContact.name}
            onChange={handleEditChange}
          />
          <input
            type="tel"
            name="number"
            value={editedContact.number}
            onChange={handleEditChange}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactItem;
