import React from 'react';
import PropTypes from 'prop-types';
import { booksCategories } from '../containers/BookForm';

const CategoryFilter = ({ selection }) => (
  <>
    <select className="select " name="category" id="filterCategory" onChange={(e) => selection(e.target.value)}>
      <option value="" disabled>
        Filter Category
      </option>
      {['All', ...booksCategories].map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </>
);
CategoryFilter.propTypes = {
  selection: PropTypes.func.isRequired,
};
export default CategoryFilter;
