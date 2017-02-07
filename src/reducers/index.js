import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import { reducer as formReducer } from 'redux-form'; // import redux-form · grab it's reducer property · create variable formReducer with it

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
