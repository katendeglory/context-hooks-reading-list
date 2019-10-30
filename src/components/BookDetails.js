import React from 'react'
import { BookContext } from './../contexts/BookContext';

function BookDetails(props) {
  const { book } = props;

  const { dispatch } = React.useContext(BookContext);

  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", payload: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
}

export default BookDetails;
