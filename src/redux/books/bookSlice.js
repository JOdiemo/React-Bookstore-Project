import axios from 'axios';

const ADD_BOOK = 'books/addBook';
const REMOVE_BOOK = 'books/removeBook';
const FETCH_BOOK = 'books/FETCH_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7uZY0qaS6HtQtuhk1SnE/books/';

const initialState = [];

const addRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case FETCH_BOOK:
      return action.book;
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const fetchBook = (book) => ({
  type: FETCH_BOOK,
  book,
});

export const fetchBookApi = () => async (dispatch) => {
  const books = await axios.get(url);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author, category } = item[1][0];
    return {
      id: item[0], title, author, category,
    };
  });
  dispatch(fetchBook(booksFetched));
};

export const removeBookApi = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7uZY0qaS6HtQtuhk1SnE/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeBook(id));
};

export const addBookApi = (book) => async (dispatch) => {
  const {
    id, title, author, category,
  } = book;

  const newBook = {
    item_id: id,
    title,
    author,
    category,
  };
  await axios.post(url, newBook);
  dispatch(addBook(book));
};

export default addRemoveReducer;
