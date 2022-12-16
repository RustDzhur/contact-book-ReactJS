import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registeration } from './operations';

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
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false
      })
  },
});
