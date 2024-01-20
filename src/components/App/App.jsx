import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';

function App() {
  const token = useSelector(state => state.auth.token);

  return (
    <Box bg="gray.100" minH="100vh">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {!token && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to={token ? '/contacts' : '/'} />} />
      </Routes>
    </Box>
  );
}

export default App;
