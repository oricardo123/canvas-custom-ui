// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import catalogsSlice from "./catalogsReducer";

export const store = configureStore({
  reducer: {
    catalogsReducer: catalogsSlice.reducer,
  },
});
