import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=yoloanda';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request // request === promise (it will resolve first before this action hits the reducers) redux-promise will 'unwrap' the promise before it forwards the action to reducers
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}