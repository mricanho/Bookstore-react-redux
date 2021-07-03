import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleBookRemove }) => (
  <>
    <tr key={book.id + 2}>
      <td key={book.id}>{book.id}</td>
      <td key={book.title}>{book.title}</td>
      <td key={book.category}>{book.category}</td>
      <td>
        <button type="button" onClick={() => handleBookRemove(book)}>Remove</button>
      </td>
    </tr>
  </>
);

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
