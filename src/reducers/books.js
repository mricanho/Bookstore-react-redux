import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const getRandomIntInclusive = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const defaultState = [
  { id: getRandomIntInclusive(1, 1000), title: 'Travels', category: 'Adventures' },
  { id: getRandomIntInclusive(1, 1000), title: 'Chaos Theory', category: 'Scientific' },
  { id: getRandomIntInclusive(1, 1000), title: 'The Lord of the Rings', category: 'Fantasy' },
  { id: getRandomIntInclusive(1, 1000), title: 'I, robot', category: 'Sci-Fi' },
];

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, book: action.book };
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;
