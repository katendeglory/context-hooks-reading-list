import React, { useEffect, useReducer } from 'react';
import bookReducer from './../reducers/bookReducer';

export const BookContext = React.createContext();

const BookContextProvider = (props) => {

  const initialState = JSON.parse(localStorage.getItem('books')) || [];
  const [books, dispatch] = useReducer(bookReducer, initialState);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;