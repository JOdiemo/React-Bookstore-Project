import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;

// export const getbooks = createAsyncThunk(
//   'books/getbooks',
//   async () => {
//     const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8bHEqSbfdyYUuS4cM1PJ/books/');
//     return response.data;
//   },
// );
