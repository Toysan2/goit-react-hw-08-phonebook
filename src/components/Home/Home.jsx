import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

function WelcomeMessage() {
  return (
    <Center>
      <Box p={4}>
        <Text fontSize="xl" textAlign="center">
          Welcome to Your Digital Phonebook! Stay connected with your contacts
          effortlessly.
        </Text>
      </Box>
    </Center>
  );
}

export default WelcomeMessage;
