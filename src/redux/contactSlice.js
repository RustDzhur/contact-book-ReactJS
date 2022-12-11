import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContacts, addNewContact } from './operations';

export const constactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: null,
      error: null,
    },
    filter: '',
  },

  reducers: {
    removeContact(state, action) {
      const index = state.contacts.items.findIndex(
        state => state.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = 'loading';
      state.contacts.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = 'resolved';
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = 'rejected';
      state.contacts.error = action.payload;
    },
    [deleteContacts.rejected]: (state, action) => {
      state.contacts.isLoading = 'rejected';
      state.contacts.error = action.payload;
    },
    // [addNewContact.pending]: state => {
    //   state.contacts.isLoading = 'loading';
    //   state.contacts.error = null;
    // },
    [addNewContact.fulfilled]: (state, action) => {
      state.contacts.items = [action.payload, ...state.contacts.items];
      state.contacts.error = null;
    },
    [addNewContact.rejected]: (state, action) => {
      state.contacts.isLoading = 'rejected';
      state.contacts.error = action.payload;
    },
  },
});

export const { removeContact, filterContact } = constactSlice.actions;
