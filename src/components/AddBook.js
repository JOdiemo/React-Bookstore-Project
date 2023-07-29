import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/bookSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  function newTitle(e) {
    setTitle(e.target.value);
  }

  function newAuthor(e) {
    setAuthor(e.target.value);
  }

  function newCategory(e) {
    setCategory(e.target.value);
  }

  const addBook = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const id = uuidv4();
      dispatch(addBookApi({
        id, title, author, category,
      }));
      e.target.reset();
    }
  };

  return (
    <>
      <h3>Add New Book</h3>
      <form className="add" onSubmit={addBook}>
        <input type="text" className="forminput" placeholder="Enter Book title Here" onChange={newTitle} required />
        <input type="text" className="forminput" placeholder="Enter author Here" onChange={newAuthor} required />
        <select name="category" className="category" onChange={newCategory}>
          <option value="userentry">Please Enter Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="romance">Romance</option>
          <option value="nonfiction">Nonfiction</option>
          <option value="horror">Horror</option>
        </select>
        <button type="submit" className="add-btn">Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
