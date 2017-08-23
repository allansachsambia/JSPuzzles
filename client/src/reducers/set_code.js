import { SET_CODE } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case SET_CODE:
      return action.payload;
    default:
  }
  return state;
}
