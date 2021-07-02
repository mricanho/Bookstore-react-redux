export const createBook = (book) => ({
  type: 'CREATE_BOOK',
  payload:
    book,
});

export const deleteBook = (book) => ({
  type: 'DELETE_BOOK',
  payload:
    book,
});

export const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  payload:
    category,
});
