// Note: because most of our components in this app will be containers we are leaving them in components folder
// instead of creating a separate containers folder
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      // This is where we specify where we want the child components to render.
      <div>
        {this.props.children}
      </div>
    );
  }
}
