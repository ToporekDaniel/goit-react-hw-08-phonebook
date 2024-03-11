import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const createNewUser = createAsyncThunk(
  'user/createNewUser',
  async (newUser, thunkAPI) => {
    try {
      const response = await apiUser.post('/users/signup', newUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
