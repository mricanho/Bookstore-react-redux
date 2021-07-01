import { combineReducers } from 'redux';

import bookReducer from './book';

const rootReducer = combineReducers({
  bookReducer,
});

export default rootReducer;
