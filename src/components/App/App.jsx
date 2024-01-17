import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation /> {/* Include navigation if available */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
