import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { productsReducer } from './products/productsSlice';
import { diaryReducer } from './diary/diarySlice';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: [
    'name',
    'token',
    'bmr',
    'dailyRateSports',
    'blood',
    'sex',
    'levelActivity',
  ],
  blacklist: ['chakra', 'light'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, userReducer),
    products: productsReducer,
    diary: diaryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
