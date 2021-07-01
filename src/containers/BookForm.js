import React, { useState } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const booksCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = ({ createNewBook }) => {
  const [data, setData] = useState({
    id: uniqid(),
    title: '',
    category: '',
  });

  const handleChange = ({ target }) => {
    setData((oldData) => ({
      ...oldData,
      [target.name]: target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    createNewBook(data);
    setData({
      id: uniqid.process(),
      title: '',
      category: '',
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title
          <input value={data.title} onChange={handleChange} id="title" name="title" type="text" />
        </label>

        <label htmlFor="options">
          Title
          <select
            onChange={handleChange}
            name="category"
            id="options"
            value={data.category}
          >
            <option value="" disabled>
              Select Category
            </option>
            {booksCategories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input onClick={(e) => handleClick(e)} type="submit" value="New book" />
      </form>
    </div>
  );
};

BookForm.propTypes = {
  createNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createNewBook: (data) => dispatch(createBook(data)),
});

export default connect(null, mapDispatchToProps)(BookForm);
