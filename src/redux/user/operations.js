import { Alert, AlertIcon } from '@chakra-ui/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `
 https://power-pulse-back.onrender.com/`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUserRegister = createAsyncThunk(
  'user/userRegister',
  async (PersonalData, thunkAPI) => {
    try {
      const response = await axios.post(`users/register`, PersonalData);
      if (response.status === 201) {
        const { email, password } = PersonalData;
        const loginResponse = await axios.post('users/login', {
          email,
          password,
        });
        setAuthHeader(loginResponse.data.token);
        return loginResponse.data;
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserLogIn = createAsyncThunk(
  'user/userLogIn',
  async (PersonalData, thunkAPI) => {
    try {
      const response = await axios.post(`users/login`, PersonalData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserCurrent = createAsyncThunk(
  'user/userCurrent',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`users/current`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserParams = createAsyncThunk(
  'user/userParams',
  async (PersonalData, thunkAPI) => {
    try {
      const response = await axios.patch(`users/params`, PersonalData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserAvatars = createAsyncThunk(
  'user/userAvatars',
  async (avatarURL, thunkAPI) => {
    try {
      const response = await axios.patch(
        `users/avatars/${avatarURL}`,
        avatarURL,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserLogout = createAsyncThunk(
  'user/userLogout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`users/logout`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshing = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;
    setAuthHeader(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(
        <Alert status="error" variant="top-accent">
          <AlertIcon status="warning" />
          Unable to fetch user
        </Alert>
      );
    }

    try {
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
