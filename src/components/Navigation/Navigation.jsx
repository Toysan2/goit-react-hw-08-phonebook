import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthToken } from '../../redux/actions';
import { Flex, Button, Link, List, ListItem } from '@chakra-ui/react';
import UserMenu from '../UserMenu/UserMenu';

function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    dispatch(clearAuthToken());
    navigate('/home');
  };

  const currentPath = location.pathname.replace(
    '/goit-react-hw-08-phonebook',
    ''
  );
  const hideHomeLink = currentPath === '/home' || currentPath === '/';
  const hideLoginLink = currentPath === '/login';
  const hideRegisterLink = currentPath === '/register';
  const isContactsPage = currentPath === '/contacts';

  return (
    <Flex as="nav" bg="blue.500" p={4} color="white" justifyContent="center">
      {token ? (
        isContactsPage ? (
          <List styleType="none" display="flex" alignItems="center">
            <ListItem mr={4}>
              <UserMenu />
            </ListItem>
            <ListItem mr={4}>
              <Button onClick={handleLogout}>Logout</Button>
            </ListItem>
          </List>
        ) : (
          // Navigation items for other cases when logged in
          <List styleType="none" display="flex" alignItems="center">
            <ListItem mr={4}>
              <Link as={NavLink} to="/home">
                Home
              </Link>
            </ListItem>
            <ListItem mr={4}>
              <Link as={NavLink} to="/contacts">
                Contacts
              </Link>
            </ListItem>
            <ListItem mr={4}>
              <Button onClick={handleLogout}>Logout</Button>
            </ListItem>
          </List>
        )
      ) : (
        // Navigation items for when not logged in
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
      )}
    </Flex>
  );
}

export default Navigation;
