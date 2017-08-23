import { combineReducers } from 'redux';
import auth from './auth';
import questions from './questions';
import solutions from './solutions';
import code from './set_code';
import error from './set_error';
import current from './set_current';
import answers from './set_answers';
import dbCode from './dbCode';

export default combineReducers({
  auth,
  dbCode,
  questions,
  code,
  error,
  current,
  solutions,
  answers
});
