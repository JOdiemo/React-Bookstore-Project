/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookContainer = () => {
  const { bookItems } = useSelector((store) => store.books);
  return (
    <section className="book-container">
      <div>
        {bookItems.map((book) => <BookItem key={book.id} {...book} />)}
      </div>
    </section>
  );
};

export default BookContainer;
