import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';

function UserMenu() {
  const user = useSelector(state => state.user);

  return user ? (
    <Text color="white" mr={4}>
      {user.email}{' '}
    </Text>
  ) : null;
}

export default UserMenu;
