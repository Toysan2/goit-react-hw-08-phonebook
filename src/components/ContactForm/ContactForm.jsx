import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!contact.name || !contact.number) {
      alert('Please fill in all fields');
      return;
    }
    onAddContact(contact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="number"
        value={contact.number}
        onChange={handleChange}
        placeholder="Number"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
