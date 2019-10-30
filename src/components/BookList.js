import React from 'react'
import { BookContext } from './../contexts/BookContext';
import BookDetails from './BookDetails';

export default function BookList() {

  const { books } = React.useContext(BookContext);

  const booksJSX = books.map(book => <BookDetails key={book.id} book={book} />);

  return books.length ?
    (
      <div className="book-list">
        <ul>{booksJSX}</ul>
      </div>
    )
    :
    (
      <div className="empty">
        No books here. Hello free time :)
      </div>
    )
}
