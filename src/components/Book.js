import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book, handleBookRemove }) => {
  const percentage = Math.floor((book.chapter / book.totalChapter) * 100);
  return (
    <div className="my-4">
      <div className="columns my-4 box">
        <div className="column">
          <div>
            <p className="is-size-7 has-text-weight-bold has-text-grey">
              {book.category}
            </p>
            <h1 className="is-size-5 has-text-weight-bold has-text-black is-family-monospace">
              {book.title}
            </h1>
            <p className="is-size-7 has-text-weight-light autor">
              {book.author}
            </p>
          </div>
          <div className="is-flex is-size-7 my-3">
            <a href="#!">
              Comments
            </a>
            <div className="mx-2 has-text-grey-light">|</div>
            <a
              href="#!"
              onClick={() => handleBookRemove(book)}
            >
              Remove
            </a>
            <div className="mx-2 has-text-grey-light">|</div>
            <a href="#!">
              Edit
            </a>
          </div>
        </div>
        <div className="column has-text-weight-light has-text-grey is-flex">
          <div
            style={{ width: 75, height: 75 }}
            className="is-size-6 has-text-weight-light has-text-grey is-uppercase"
          >
            <CircularProgressbarWithChildren value={percentage} />
          </div>
          <div className="pb-6 mx-6 is-flex is-justify-content-center is-flex-direction-column">
            <h1 className="is-size-3 has-text-black">
              {`${percentage}% `}
            </h1>
            <div className="is-size-6">Completed</div>
          </div>
        </div>
        <div className="column is-family-monospace">
          <p className="is-size-6 has-text-weight-light has-text-grey is-uppercase">
            Current Chapter
          </p>
          <h1 className="mb-2">
            Chapter
            {book.chapter}
          </h1>
          <button className="button is-info is-small px-5" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
