import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthToken } from '../../redux/actions';
import { Flex, Button, Link, List, ListItem } from '@chakra-ui/react';

function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const handleLogout = () => {
    dispatch(clearAuthToken());
  };

  // Strip the basename from the current pathname
  const currentPath = location.pathname.replace(
    '/goit-react-hw-08-phonebook',
    ''
  );

  const hideHomeLink = currentPath === '/home' || currentPath === '/';
  const hideLoginLink = currentPath === '/login';
  const hideRegisterLink = currentPath === '/register';
  const hideContactsLink = currentPath === '/contacts';

  const navItemsNotLoggedIn = (
    <List styleType="none" display="flex" alignItems="center">
      {!hideHomeLink && (
        <ListItem mr={4}>
          <Link as={NavLink} to="/home">
            Home
          </Link>
        </ListItem>
      )}
      {!hideLoginLink && (
        <ListItem mr={4}>
          <Link as={NavLink} to="/login">
            Login
          </Link>
        </ListItem>
      )}
      {!hideRegisterLink && (
        <ListItem mr={4}>
          <Link as={NavLink} to="/register">
            Register
          </Link>
        </ListItem>
      )}
    </List>
  );

  const navItemsLoggedIn = (
    <List styleType="none" display="flex" alignItems="center">
      {!hideHomeLink && (
        <ListItem mr={4}>
          <Link as={NavLink} to="/home">
            Home
          </Link>
        </ListItem>
      )}
      {!hideContactsLink && (
        <ListItem mr={4}>
          <Link as={NavLink} to="/contacts">
            Contacts
          </Link>
        </ListItem>
      )}
      <ListItem mr={4}>
        <Button onClick={handleLogout}>Logout</Button>
      </ListItem>
    </List>
  );

  return (
    <Flex as="nav" bg="blue.500" p={4} color="white" justifyContent="center">
      {!token ? navItemsNotLoggedIn : navItemsLoggedIn}
    </Flex>
  );
}

export default Navigation;
