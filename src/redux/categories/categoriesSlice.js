import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    bookCateg: () => 'under construction',
  },
});

export const { bookCateg } = categorySlice.actions;
export default categorySlice.reducer;
