import { configureStore } from '@reduxjs/toolkit';
import { constactSlice } from './contactSlice';

export const store = configureStore({
  reducer: {
    user: constactSlice.reducer,
  },
});

