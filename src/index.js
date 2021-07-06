import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uniqid from 'uniqid';
import App from './components/App';
import reducers from './reducers';
import { createBook } from './actions';
import './index.css';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducers);

const INITIAL_STATE = [
  {
    id: uniqid.process(),
    title: 'The Lord Of The Rings',
    category: 'Action',
    author: 'JRR Tolkien',
    totalChapter: Math.floor(Math.random() * 50) + 20,
    chapter: Math.floor(Math.random() * 20) + 1,
  },
  {
    id: uniqid.process(),
    title: 'I, Robot',
    category: 'Sci-Fi',
    author: 'Isaac Asimov',
    totalChapter: Math.floor(Math.random() * 50) + 20,
    chapter: Math.floor(Math.random() * 20) + 1,
  },
  {
    id: uniqid.process(),
    title: 'Chaos Theory',
    category: 'Learning',
    author: 'Carl Sagan',
    totalChapter: Math.floor(Math.random() * 50) + 20,
    chapter: Math.floor(Math.random() * 20) + 1,
  },
  {
    id: uniqid.process(),
    title: 'Exodus',
    category: 'History',
    author: 'James Wodd',
    totalChapter: Math.floor(Math.random() * 50) + 20,
    chapter: Math.floor(Math.random() * 20) + 1,
  },
];

INITIAL_STATE.map((book) => store.dispatch(createBook(book)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
