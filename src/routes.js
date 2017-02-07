import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

// We can use <Route /> as a self closing tag but we don't have to.
export default (
  // We have specified that Greeting component (child) has to render within App...
  // but React doesn't know where within App to render it...
  // we need to specify {this.props.children} within app.js
  // posts/:id · react-router will parse the URL and pass a this.props.params.id into PostsShow component
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
