import { SET_CURRENT } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case SET_CURRENT:
      return action.payload;
    default:
  }
  return state;
}
