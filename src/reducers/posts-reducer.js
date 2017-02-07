import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null }; // all === list of all blog posts for the index page, post === currently selected post

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}