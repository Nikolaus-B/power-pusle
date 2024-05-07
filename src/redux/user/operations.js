import { Alert, AlertIcon } from '@chakra-ui/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `
 https://power-pulse-back.onrender.com/`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
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
      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserCurrent = createAsyncThunk(
  'user/userCurrent',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken !== '') {
      try {
        setAuthHeader(persistedToken);
        const response = await axios.get('users/current');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(
          <Alert status="error">
            <AlertIcon status="warning" />
            Unable to get current user
          </Alert>
        );
      }
    }
  }
);

export const fetchUserParams = createAsyncThunk(
  'user/userParams',
  async (PersonalData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken !== '') {
      try {
        setAuthHeader(persistedToken);
        const response = await axios.patch(`users/params`, PersonalData);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(
          <Alert status="error">
            <AlertIcon status="warning" />
            Unable to update current user
          </Alert>
        );
      } finally {
        <Alert status="success">
          <AlertIcon status="success" />
          Personal info has been updated
        </Alert>;
      }
    }
  }
);

export const fetchUserAvatars = createAsyncThunk(
  'user/userAvatars',
  async (avatarURL, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken !== '') {
      try {
        setAuthHeader(persistedToken);
        const formData = new FormData();
        formData.append('avatar', avatarURL);
        const response = await axios.patch(`users/avatars`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(
          <Alert status="error">
            <AlertIcon status="warning" />
            Unable to update user avatar
          </Alert>
        );
      } finally {
        <Alert status="success">
          <AlertIcon status="success" />
          Avatar has been updated
        </Alert>;
      }
    }
  }
);

export const fetchUserLogout = createAsyncThunk(
  'user/userLogout',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken !== '') {
      try {
        removeAuthHeader();
        const response = await axios.post(`users/logout`);

        return response.data;
      } catch (e) {
        <Alert status="error">
          <AlertIcon status="error" />
          Logout failed
        </Alert>;
      } finally {
        <Alert status="success">
          <AlertIcon status="success" />
          User logout
        </Alert>;
      }
    }
  }
);

export const accessRefreshing = createAsyncThunk(
  'user/accessRefresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken !== '') {
      setAuthHeader(persistedToken);
      return setAuthHeader;
    }
  }
);
