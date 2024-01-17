import { configureStore } from '@reduxjs/toolkit';
import { userReducer, contactsReducer, authReducer } from './reducers';

const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;
