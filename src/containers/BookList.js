import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBook } from '../actions';
import Book from '../components/Book';

const BooksList = ({ books, deleteBook }) => {
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };
  return (

    <table>

      <thead>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.bookReducer.map((book) => (

          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />

        ))}
      </tbody>

      <tbody />
    </table>
  );
};

const mapStateToProps = (state) => ({ books: state });

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { deleteBook })(BooksList);
