import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: () => {

    },
    removeBook: () => {

    },
  },
});

export default bookSlice.reducer;
