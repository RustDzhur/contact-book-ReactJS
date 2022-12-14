import { createSlice } from '@reduxjs/toolkit';
import { registeration } from './operations';

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registeration.pending, (state, action) => {
        return state;
      })
      .addCase(registeration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registeration.rejected, (state, action) => {
        return state;
      });
  },
});
