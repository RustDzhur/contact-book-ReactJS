import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContacts, addNewContact } from './operations';
import toast from 'react-hot-toast';

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
      toast.success('Contact is Deleted', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
      });
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = 'loading';
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = 'resolved';
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = 'rejected';
        state.contacts.error = action.payload;
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.contacts.isLoading = 'rejected';
        state.contacts.error = action.payload;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items,];
        state.contacts.error = null;
      })
      .addCase(addNewContact.rejected, (state, action) => {
        state.contacts.isLoading = 'rejected';
        state.contacts.error = action.payload;
      });
  },
});

export const { removeContact, filterContact } = constactSlice.actions;
