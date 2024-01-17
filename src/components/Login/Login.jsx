import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import myAPI from '../myAPI/myAPI';
import { setAuthToken } from '../../redux/actions'; // Update this path as per your project structure

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
      const response = await myAPI.login(credentials);
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
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
