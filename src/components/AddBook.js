/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/bookSlice';
import Button from './Button';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);

  const saveBook = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({
        item_id: nanoid(),
        title,
        author,
      }));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      <form className="book-form">
        <input
          type="text"
          id="input-tittle"
          placeholder="Book tittle"
          value={title}
          onChange={onTitleChange}
        />
        <input
          type="text"
          id="input-author"
          placeholder="Author"
          value={author}
          onChange={onAuthorChange}
        />
        <Button type="submit" onClick={saveBook} btnName="Add-btn" btnValue="Add Book" />
      </form>
    </div>
  );
}

export default AddBook;
