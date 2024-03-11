import { createNewUser } from './userOperations';
import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewUser.pending, handlePending)
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(createNewUser.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
