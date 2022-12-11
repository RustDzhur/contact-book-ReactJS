import { createAsyncThunk } from '@reduxjs/toolkit';
import {removeContact} from './contactSlice'

import axios from 'axios';

axios.defaults.baseURL = 'https://6390ec4365ff41831122bf15.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, thunAPI) {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, thunkAPI) {
    try {
      await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(removeContact(id));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async function (newContactUser, thunkAPI) {
    try {
      const response = await axios.post('/contacts', newContactUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);