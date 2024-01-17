import {
  SET_USER,
  CLEAR_USER,
  SET_CONTACTS,
  SET_AUTH_TOKEN,
  CLEAR_AUTH_TOKEN,
} from './actions';

const initialUserState = null;
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

const initialContactsState = [];
export const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};

const initialAuthState = {
  token: null,
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, token: action.payload };
    case CLEAR_AUTH_TOKEN:
      return { ...state, token: null };
    default:
      return state;
  }
};
