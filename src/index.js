import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uniqid from 'uniqid';
import App from './components/App';
import reducers from './reducers';
import { createBook } from './actions';

const store = createStore(reducers);

const INITIAL_STATE = [
  { id: uniqid.process(), title: 'The Lord Of The Rings', category: 'Action' },
  { id: uniqid.process(), title: 'I, Robot', category: 'Sci-Fi' },
  { id: uniqid.process(), title: 'Chaos Theory', category: 'Learning' },
  {
    id: uniqid.process(),
    title: 'Exodus',
    category: 'History',
  },
];

INITIAL_STATE.map((book) => store.dispatch(createBook(book)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
