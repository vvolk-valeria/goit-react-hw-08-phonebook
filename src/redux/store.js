import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { filtersReducer } from "./filter/filterSlice";
import { contactsReducer } from "./contacts/contacsSlice";
import storage from 'redux-persist/lib/storage';
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
import { authReducer } from "./auth/authSlise";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth:persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer, 
  },
  middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
