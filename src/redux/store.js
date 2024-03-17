import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { userReducer } from './user/userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { darkModeReducer } from './darkmode/reducers';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const darkPersistConfig = {
  key: 'darkMode',
  storage,
  whitelist: ['isDarkMode'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    darkMode: persistReducer(darkPersistConfig, darkModeReducer),
    user: persistReducer(userPersistConfig, userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
