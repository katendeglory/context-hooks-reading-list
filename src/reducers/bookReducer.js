const bookReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_BOOK":
      return [...state, payload];

    case "REMOVE_BOOK":
      return state.filter(book => book.id !== payload);

    default:
      return state;
  }
}

export default bookReducer;