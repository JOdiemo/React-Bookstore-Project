import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, category, author }) => (
  <div className="book__container">
    <div className="description">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="title">{author}</p>
      <button type="button" className="comments">Comments</button>
      <button type="button" className="remove">Remove</button>
      <button type="button" className="edit">Edit</button>
    </div>
    <div className="progress">
      <p className="percentage">50% Completed</p>
    </div>
    <div className="update">
      <p className="current">CURRENT CHAPTER</p>
      <p className="chapter">Chapter 3</p>
      <button type="button" className="updating">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
