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

  fetchContacts: async token => {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  },

  login: async credentials => {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  },

  logout: async token => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/logout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  addContact: async (contactData, token) => {
    const { name, number } = contactData;
    if (!name || !number) {
      throw new Error('Name and number are required to add a contact');
    }

    const bodyData = JSON.stringify({ name, number });

    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: bodyData,
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message || 'Failed to add contact');
    }

    return await response.json();
  },

  editContact: async (contactId, contactData, token) => {
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

  deleteContact: async (contactId, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'Failed to delete the contact');
      }

      return await response.json();
    } catch (error) {
      console.error('Delete contact error:', error);
      throw error;
    }
  },
};

export default myAPI;
