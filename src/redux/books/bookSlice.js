import { createSlice, nanoid } from '@reduxjs/toolkit';
import bookItems from '../../bookitems';

const initialState = {
  bookItems,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems = [
        ...state.bookItems,
        {
          id: nanoid(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter((book) => book.id !== bookId);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
