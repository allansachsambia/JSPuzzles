import { FETCH_CODE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CODE:
      return action.payload;
    default:
      return state;
  }
}
