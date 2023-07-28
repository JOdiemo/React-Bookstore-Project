/* eslint-disable max-len */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import { fetchBookApi } from '../redux/books/bookSlice';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);

  return (
    <>
      <div className="allbooks">
        {books.map(
          (book) => <Book key={book.id} id={book.id} title={book.title} author={book.author} category={book.category} />,
        )}
      </div>
      <hr />
      <AddBook />
    </>
  );
};

export default Books;
