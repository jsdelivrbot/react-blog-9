import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

const Greeting = () => {
  return <div>Holo</div>;
};

// We can use <Route /> as a self closing tag but we don't have to.
export default (
  // We have specified that Greeting component (child) has to render within App...
  // but React doesn't know where within App to render it...
  // we need to specify {this.props.children} within app.js
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);