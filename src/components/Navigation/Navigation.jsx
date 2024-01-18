import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthToken } from '../../redux/actions'; // Update this path as per your project structure
import myAPI from '../myAPI/myAPI';

function Navigation() {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    if (token) {
      try {
        await myAPI.logOut(token);
        dispatch(clearAuthToken());
        // Additional logic for post-logout (e.g., redirect to login page)
      } catch (error) {
        console.error('Error during logout:', error);
        // Handle logout error
      }
    } else {
      console.error('No token found for logout');
    }
  };

  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navigation;
