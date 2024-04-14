import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "../Services/authApi";
import authSlice from "./Slices/authSlice";
const persistConfig = {
  key: "root", // This is the key used to store the data in storage
  storage // Use the storage type you imported (e.g., localStorage, AsyncStorage, etc.)
};

const persistedReducer: any = persistReducer(
  persistConfig,
  combineReducers({
    authSlice,
  })
);

export const store = configureStore({
  reducer: {
    persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => 
    getDefaultMiddleware()
    .concat(authApi.middleware)
});

export const persistor = persistStore(store);
