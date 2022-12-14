import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// const clearAuthoHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// }

export const registeration = createAsyncThunk(
    'auth/registeration',
    async function (credentials, thunAPI) {
      try {
        const response = await axios.post('/users/signup', credentials)
        setAuthHeader(response.data.token)
        return response.data
      } catch (error) {
        thunAPI.rejectWithValue(error.message)
      }
    }
  )