import React, { useState } from 'react';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Box,
} from '@chakra-ui/react';

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
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      mt=""
      ml=""
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <VStack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </FormControl>
        <FormControl id="number">
          <FormLabel>Number</FormLabel>
          <Input
            name="number"
            value={contact.number}
            onChange={handleChange}
            placeholder="Number"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Add Contact
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactForm;
