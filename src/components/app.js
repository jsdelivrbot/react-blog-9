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
