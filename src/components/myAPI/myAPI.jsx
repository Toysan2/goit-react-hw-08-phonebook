const API_BASE_URL = 'https://connections-api.herokuapp.com';

const myAPI = {
  register: async userData => {
    const response = await fetch(`${API_BASE_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  logIn: async userData => {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  logOut: async token => {
    const response = await fetch(`${API_BASE_URL}/users/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.ok;
  },

  fetchContacts: async token => {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  },

  addContact: async (token, contactData) => {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(contactData),
    });
    return await response.json();
  },

  deleteContact: async (token, contactId) => {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.ok;
  },

  updateContact: async (token, contactId, contactData) => {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(contactData),
    });
    return await response.json();
  },
};

export default myAPI;
