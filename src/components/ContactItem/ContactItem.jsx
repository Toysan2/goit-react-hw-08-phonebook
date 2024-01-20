import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Button,
  Input,
  Stack,
  Heading,
  FormControl,
} from '@chakra-ui/react';

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
    <Box p={4} shadow="md" borderWidth="1px">
      {!isEditing ? (
        <>
          <Heading size="md">{contact.name}</Heading>
          <Text>{contact.number}</Text>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="blue" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button colorScheme="red" onClick={() => onDelete(contact.id)}>
              Delete
            </Button>
          </Stack>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl>
              <Input
                type="text"
                name="name"
                value={editedContact.name}
                onChange={handleEditChange}
                placeholder="Name"
              />
            </FormControl>
            <FormControl>
              <Input
                type="tel"
                name="number"
                value={editedContact.number}
                onChange={handleEditChange}
                placeholder="Number"
              />
            </FormControl>
            <Stack direction="row" spacing={4}>
              <Button type="submit" colorScheme="green">
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)} colorScheme="yellow">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      )}
    </Box>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactItem;
