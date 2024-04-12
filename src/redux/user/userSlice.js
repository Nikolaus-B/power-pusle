import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  fetchUserAvatars,
  fetchUserCurrent,
  fetchUserLogIn,
  fetchUserLogout,
  fetchUserParams,
  fetchUserRegister,
  refreshing,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
  bmr: 0,
  dailyRateSports: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchUserRegister.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchUserRegister.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.goToParams = true;
        state.isLoading = false;
        state.token = action.payload.token;
        toast.success('Registration successful');
      })

      .addCase(fetchUserRegister.rejected, state => {
        state.isLoading = false;
        toast.error(
          'This email address is already registered. Please enter another email address to proceed.'
        );
      })

      .addCase(fetchUserLogIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchUserLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.loading('Successful login.');
      })

      .addCase(fetchUserLogIn.rejected, state => {
        state.isLoading = false;
        toast.error(
          'Unable to sign in. Please check your email and password. Please try again!'
        );
      })

      .addCase(fetchUserCurrent.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.bmr = action.payload.bmr;
        state.dailyRateSports = action.payload.dailyRateSports;
      })

      .addCase(fetchUserParams.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })

      .addCase(fetchUserAvatars.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })

      .addCase(fetchUserLogout.fulfilled, state => {
        state.user = {
          name: '',
          email: '',
          blood: 0,
          sex: '',
          height: 0,
          currentWeight: 0,
          desiredWeight: 0,
          birthday: '',
          levelActivity: 0,
          avatarURL: '',
        };
        state.token = '';
        state.isLoggedIn = false;
        state.bmr = 0;
        state.dailyRateSports = 0;
      })

      .addCase(refreshing.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(refreshing.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(refreshing.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const userReducer = userSlice.reducer;
