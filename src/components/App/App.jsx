import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthToken, setUser } from '../../redux/actions';
import { Box } from '@chakra-ui/react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';

function App() {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedToken = localStorage.getItem('authToken');
    const persistedUserData = localStorage.getItem('userData');

    if (persistedToken) {
      dispatch(setAuthToken(persistedToken));
    }
    if (persistedUserData) {
      dispatch(setUser(JSON.parse(persistedUserData)));
    }
  }, [dispatch]);

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
