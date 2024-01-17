// Define action types
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const SET_CONTACTS = 'SET_CONTACTS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';

// Action creators
export const setUser = userData => ({
  type: SET_USER,
  payload: userData,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const setAuthToken = token => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const clearAuthToken = () => ({
  type: CLEAR_AUTH_TOKEN,
});
