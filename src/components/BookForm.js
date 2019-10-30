import React, { useState } from 'react'
import { BookContext } from './../contexts/BookContext';
const uuid = require("uuid");

const BookForm = () => {
  const { dispatch } = React.useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const clearState = () => {
    setTitle("");
    setAuthor("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", payload: { title, author, id: uuid() } });
    clearState();
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="book title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="text" placeholder="book author" value={author} onChange={e => setAuthor(e.target.value)} required />
      <input type="submit" value="Add Book" />
    </form >
  )
}

export default BookForm;
