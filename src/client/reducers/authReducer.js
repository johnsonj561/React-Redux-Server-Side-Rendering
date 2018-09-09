import { FETCH_CURRENT_USER } from '../actions';

const DEFAULT_STATE = null;

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
