import { configureStore } from '@reduxjs/toolkit';
import { constactSlice } from './contactBook/contactSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    user: constactSlice.reducer,
    auth: authReducer.reducer,
  },
});

