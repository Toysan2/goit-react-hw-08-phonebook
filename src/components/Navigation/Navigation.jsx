
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthToken } from '../../redux/actions';

function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const handleLogout = () => {
    dispatch(clearAuthToken());
  };

  // Strip the basename from the current pathname
  const currentPath = location.pathname.replace('/goit-react-hw-08-phonebook', '');

  const hideHomeLink = currentPath === '/home' || currentPath === '/';
  const hideLoginLink = currentPath === '/login';
  const hideRegisterLink = currentPath === '/register';
  const hideContactsLink = currentPath === '/contacts';

  const navItemsNotLoggedIn = (
    <ul>
      {!hideHomeLink && <li><NavLink to="/home">Home</NavLink></li>}
      {!hideLoginLink && <li><NavLink to="/login">Login</NavLink></li>}
      {!hideRegisterLink && <li><NavLink to="/register">Register</NavLink></li>}
    </ul>
  );

  const navItemsLoggedIn = (
    <ul>
      {!hideHomeLink && <li><NavLink to="/home">Home</NavLink></li>}
      {!hideContactsLink && <li><NavLink to="/contacts">Contacts</NavLink></li>}
      <li><button onClick={handleLogout}>Logout</button></li>
    </ul>
  );

  return (
    <nav>
      {!token ? navItemsNotLoggedIn : navItemsLoggedIn}
    </nav>
  );
}

export default Navigation;
