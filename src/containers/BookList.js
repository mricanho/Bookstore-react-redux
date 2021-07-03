import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, deleteBook, booksFiltered, changeFilter,
}) => {
  const handleBookRemove = (book) => {
    deleteBook(book);
  };
  const handleFilterChange = (category) => {
    changeFilter(category);
  };
  const selectedCategory = () => {
    if (books.filtered !== 'All') {
      books.book.map(
        (book) => book.category.toLowerCase() === booksFiltered.toLowerCase(),
      );
      return books.book.filter((book) => book.category === booksFiltered);
    }
    return books.book;
  };

  return (

    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            BOOK STORE
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <a href="#!">Books</a>
            </div>
            <div className="navbar-item">
              <CategoryFilter selection={handleFilterChange} />
            </div>
          </div>
        </div>
      </nav>
      <table className="table">
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedCategory().map((book) => (

            <Book
              key={book.id}
              book={book}
              handleBookRemove={handleBookRemove}
            />
          ))}
        </tbody>
      </table>

    </>
  );
};

const mapStateToProps = (state) => ({
  books: state,
  booksFiltered: state.filtered,
});

BooksList.propTypes = {
  books: PropTypes.objectOf(Object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  booksFiltered: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { deleteBook, changeFilter })(
  BooksList,
);
