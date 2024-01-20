import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../redux/actions';
import myAPI from '../myAPI/myAPI';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setError(''); // Reset error message
    if (userData.password.length < 7) {
      setError('Sorry, your password is too short');
      return;
    }
    try {
      const response = await myAPI.register(userData);
      if (response.token) {
        dispatch(setAuthToken(response.token));
        navigate('/contacts');
      } else {
        // Handle registration failure
        console.error('Registration failed:', response);
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Handle other registration errors
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <VStack spacing={4}>
        {error && <Text color="red.500">{error}</Text>}
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Register
        </Button>
      </VStack>
    </Box>
  );
}

export default Register;
