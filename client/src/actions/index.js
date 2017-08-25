import axios from 'axios';
import {
  FETCH_USER,
  FETCH_CODE,
  SET_CODE,
  SET_ERROR,
  SET_CURRENT,
  SET_ANSWERS
} from './types';

// Set code.
export function setCode(code) {
  return {
    type: SET_CODE,
    payload: code
  };
}

// Set error.
export function setError(error) {
  return {
    type: SET_ERROR,
    payload: error
  };
}

// Set current.
export function setCurrent(current) {
  return {
    type: SET_CURRENT,
    payload: current
  };
}

// Set answers.
export function setAnswers(code) {
  return {
    type: SET_ANSWERS,
    payload: code
  };
}

// Get the users data.
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Update Code
export const updateCode = values => async dispatch => {
  const res = await axios.put('/api/code', values);
  dispatch({ type: FETCH_CODE, payload: res.data });
};

// Post Initial Code
export const createCode = values => async dispatch => {
  const res = await axios.post('/api/code', values);
  dispatch({ type: FETCH_CODE, payload: res.data });
};

// Fetch code
export const fetchCode = () => async dispatch => {
  const res = await axios.get('/api/code');
  dispatch({ type: FETCH_CODE, payload: res.data });
};
