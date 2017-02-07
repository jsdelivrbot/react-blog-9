import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';
import promise from 'redux-promise';

// Specifying promise as middleware --> making sure our actions hit redux-promise before they reach reducers
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  // Passing off control of rendering our application to Router...
  // Router is the object that decides which React components to render whenever the URL changes
  // configuration: browserHistory is an object that tells React Router how to interpret changes to the URL
  // browserHistory is 1 out of 3 histories we can use
  // browserHistory --> http://www.blog.com/posts/5 --> if anything changes after www.blog.com/ the History tells React Router that it needs to update
  // hashHistory    --> http://www.blog.com/#posts/5 --> if anything changes after hash the History tells React Router that it needs to update
  // memoryHistory  --> doesn't uses the URL at all for triggering React Router...
  // more config --> telling Router what valid routes our app has --> see routes.js
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
