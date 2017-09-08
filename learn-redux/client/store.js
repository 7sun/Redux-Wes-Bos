import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-store'
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'; // root reducer

import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store
