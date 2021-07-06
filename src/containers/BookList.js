import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import 'font-awesome/css/font-awesome.min.css';
import user from '../images/circle-user.png';

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
      <nav className="navbar px-6">
        <div className="navbar-brand pl-6">
          <a className="navbar-item has-text-info has-text-weight-bold is-size-4" href="/">
            BOOKSTORE CMS
          </a>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className="navbar-item">
              <a href="#!" className="is-size-6 has-text-dark">BOOKS</a>
            </div>
            <div className="navbar-item">
              <div className="select">
                <CategoryFilter selection={handleFilterChange} />
              </div>
            </div>
          </div>
          <div className="navbar-end pr-6">
            <div className="navbar-item">
              <a href="#!" className="icon has-text-info is-large">
                <img src={user} alt="user icon" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container has-background-light">
        {selectedCategory().map((book) => (
          <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />
        ))}
        <hr
          className="mt-6"
          style={{
            color: '#e8e8e8',
            backgroundColor: '#e8e8e8',
            borderColor: '#e8e8e8',
          }}
        />
      </div>

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
