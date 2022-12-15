import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthoHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registeration = createAsyncThunk(
  'auth/registeration',
  async function (credentials, thunAPI) {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      thunAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async function (credentials, thunAPI) {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthoHeader();
    } catch (error) {
      return thunAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk (
  'auth/refresh',
  async (_, thunAPI) => {
    const state = thunAPI.getState().auth.token
    if (!state) {
      return thunAPI.rejectWithValue('No valid Token')
    }
    setAuthHeader(state)
    try {
      const response = await axios.get('users/current')
      return response.data
    } catch (error) {
      return thunAPI.rejectWithValue(error.message)
    }
  }
)