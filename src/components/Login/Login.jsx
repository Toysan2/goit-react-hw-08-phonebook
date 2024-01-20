import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import myAPI from '../myAPI/myAPI';
import { setAuthToken } from '../../redux/actions'; // Update this path as per your project structure
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await myAPI.logIn(credentials); // Corrected the function name to 'logIn'
      if (response.token) {
        dispatch(setAuthToken(response.token));
        navigate('/contacts');
      } else {
        // Handle login failure (e.g., display an error message)
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., display a notification)
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
