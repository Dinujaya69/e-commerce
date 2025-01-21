import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from '../features/counterSlice';
import productSliceReducer from '../features/productSlice';
import authReducer from '../features/authSlice';
import { apiSlice } from '../apiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
     counter: counterSliceReducer,
    productSlice: productSliceReducer,
  },
  // Add the apiSlice.middleware here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
