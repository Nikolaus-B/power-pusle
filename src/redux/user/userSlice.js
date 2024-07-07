import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  fetchUserAvatars,
  fetchUserCurrent,
  fetchUserLogIn,
  fetchUserLogout,
  fetchUserParams,
  fetchUserRegister,
  accessRefreshing,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    blood: 1,
    sex: 'male',
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    levelActivity: 1,
    createdAt: null,
  },
  token: null,
  isLoggedIn: null,
  isRefreshing: null,
  isLoading: true,
  isError: null,
  bmr: 0,
  dailyRateSports: 0,
};

const handlePending = (state, action) => {
  state.isRefreshing = true;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = action.payload.error;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchUserRegister.pending, state => {
        state.isRefreshing = false;
        state.isError = null;
      })
      .addCase(fetchUserRegister.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.goToParams = true;
        state.isLoading = false;
        toast.success('Registration successful');
      })
      .addCase(fetchUserRegister.rejected, handleRejected, toast => {
        toast.error(
          'This email address is already registered. Please enter another email address to proceed.'
        );
      })
      //---------------------------------
      .addCase(fetchUserLogIn.pending, handlePending)
      .addCase(fetchUserLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = true;
        state.bmr = action.payload.bmr;
        state.dailyRateSports = action.payload.dailyRateSports;
        toast.loading('Successful login.');
      })
      .addCase(fetchUserLogIn.rejected, state => {
        state.isLoading = false;
        toast.error(
          'Unable to sign in. Please check your email and password. Please try again!'
        );
      })

      //-------------------------------
      .addCase(fetchUserCurrent.pending, handlePending)
      .addCase(fetchUserCurrent.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = true;
        state.bmr = action.payload.bmr;
        state.dailyRateSports = action.payload.dailyRateSports;
      })
      .addCase(fetchUserCurrent.rejected, handleRejected)

      //--------------------------------
      .addCase(fetchUserParams.pending, handlePending)
      .addCase(fetchUserParams.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = true;
        state.isRefreshing = true;
        state.bmr = action.payload.bmr;
        state.dailyRateSports = action.payload.dailyRateSports;
      })
      .addCase(fetchUserParams.rejected, handleRejected)

      //--------------------------------
      .addCase(fetchUserAvatars.pending, (state, action) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(fetchUserAvatars.fulfilled, (state, action) => {
        state.avatarURL = action.payload.avatarURL;
        state.isRefreshing = true;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchUserAvatars.rejected, handleRejected)

      //---------------------------------
      .addCase(fetchUserLogout.pending, handlePending)
      .addCase(fetchUserLogout.fulfilled, (state, action) => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(fetchUserLogout.rejected, handleRejected)

      //-------------------------------------
      .addCase(accessRefreshing.pending, handlePending)
      .addCase(accessRefreshing.fulfilled, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(accessRefreshing.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
