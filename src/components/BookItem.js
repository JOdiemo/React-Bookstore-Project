import React from 'react';
import { removeBook } from './addremove';

const BookItem = (id) => {
  return (
    <article className='book-item'>
      <button className='remove-btn' onClick={(removeBook())}>Remove</button>

    </article>
  )
}

export default BookItem;
