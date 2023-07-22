import React from 'react';
import Book from './Book';

const BookList = () => {
  const store = [
    {
      category: 'Technology',
      title: 'Book Test 1',
      author: 'Author Test1',
      item_id: '1',
    },
    {
      category: 'Scifi',
      title: 'Book Test 2',
      Author: 'Author Test 2',
      item_id: '2',
    },
  ];
  return (
    <ul className="booklist__container">
      {store.map((book) => (
        <li key={book.item_id}>
          <Book title={book.title} category={book.category} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
