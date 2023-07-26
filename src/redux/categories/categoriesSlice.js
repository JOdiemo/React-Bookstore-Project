import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryItems: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  categoryState: () => <div>Under Construction</div>,
});

export const { categoryState } = categorySlice.state;
export default categorySlice.reducer;
