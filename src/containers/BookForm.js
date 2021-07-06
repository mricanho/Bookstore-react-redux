import React, { useState } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import faker from 'faker';
import { createBook } from '../actions';

export const booksCategories = [
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
    author: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
    totalChapter: Math.floor(Math.random() * 50) + 20,
    chapter: Math.floor(Math.random() * 20) + 1,
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
    <div className="container mx-auto">
      <hr />
      <div className="has-text-weight-bold has-text-grey mb-2">
        ADD NEW BOOK
      </div>
      <form>
        <div className="columns is-align-items-center">
          <div className="column is-one-third is-justify-content-center is-flex">
            <input
              className="input"
              value={data.title}
              onChange={handleChange}
              id="title"
              name="title"
              type="text"
              placeholder="Book title"
            />
          </div>

          <div className="column is-one-third is-justify-content-center is-flex">
            <div className="select  is-fullwidth">
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
            </div>
          </div>

          <div className="column is-one-third is-justify-content-center is-flex">
            <input
              className="button is-info"
              onClick={(e) => handleClick(e)}
              type="submit"
              value="New book"
            />
          </div>
        </div>
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
