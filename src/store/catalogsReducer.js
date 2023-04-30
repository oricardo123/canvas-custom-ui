import { createSlice } from "@reduxjs/toolkit";
export const catalogsSlice = createSlice({
  name: "catalogs",
  initialState: {
   catalogs: []
  },
  reducers: {
    addCatalogs: (state, action) => {
      console.log(action)
      state.catalogs = action.payload;
    },
  },
});

export const {
  addCatalogs
} = catalogsSlice.actions;
export default catalogsSlice;
