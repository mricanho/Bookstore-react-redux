import React from 'react';
import BooksList from '../containers/BookList';
import BooksForm from '../containers/BookForm';

const App = () => (
  <div className="has-background-light">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
