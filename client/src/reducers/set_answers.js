import { SET_ANSWERS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SET_ANSWERS:
      return [action.payload];
    default:
  }
  return state;
}
