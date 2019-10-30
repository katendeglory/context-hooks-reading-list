import React from 'react'
import { BookContext } from './../contexts/BookContext';

function NavBar() {

  const { books } = React.useContext(BookContext);

  return (
    <div className="navbar">
      <h1>ReactJS Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  )
}

export default NavBar;
