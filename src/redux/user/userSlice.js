import { createSlice } from '@reduxjs/toolkit';
import { createNewUser, login, logout, refreshUser } from './userOperations';

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
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewUser.pending, handlePending)
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(createNewUser.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, handleRejected)

      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
        state.user = { name: '', email: '' };
        state.token = '';
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const userReducer = userSlice.reducer;
