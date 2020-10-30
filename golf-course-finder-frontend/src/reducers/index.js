import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  courses: coursesReducer,
  comments: commentsReducer
})

