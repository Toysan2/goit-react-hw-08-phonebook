import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../redux/actions';
import myAPI from '../myAPI/myAPI';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await myAPI.register(userData);

    if (response.token) {
      dispatch(setAuthToken(response.token));
      navigate('/contacts');
    } else {
      // Handle registration failure
      console.error('Registration failed:', response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
