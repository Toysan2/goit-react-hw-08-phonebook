import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import myAPI from '../myAPI/myAPI';
import { setAuthToken, setUser } from '../../redux/actions'; // Ensure setUser action is imported
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setError(''); // Reset error message
    try {
      const response = await myAPI.logIn(credentials);
      if (response.token) {
        dispatch(setAuthToken(response.token));
        dispatch(setUser({ email: credentials.email })); // Dispatch user's email
        navigate('/contacts');
      } else {
        setError('Sorry, bad or non-existent email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Sorry, bad or non-existent email or password');
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
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
