import React from 'react';
import { removeBook } from './addremove';

const BookItem = () => (
  <article className="book-item">
    <button className="remove-btn" type="button" onClick={(removeBook())}>Remove</button>

  </article>
);

export default BookItem;
