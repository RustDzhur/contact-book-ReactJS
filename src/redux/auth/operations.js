import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
    'auth/register',
    async function (_, thunAPI) {
      try {
        const response = await axios.post('/user/signup')
        return response.data
      } catch (error) {
        thunAPI.rejectWithValue(error.message)
      }
    }
  )