import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; // With the shorthand within the connect() at the bottom we don't need this anymore either...
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'; // Link is an actual component

class PostsIndex extends Component {
   // One of the lifecycle methods
   // React calls this ONCE when the component is about to be rendered to the DOM the first time
   // Will NOT be called on subsequent re-renders
   // In the weather app if was more clear cut where to put the data fetching process (on button click)
   // In this app it is a bit more ambigious where to put our data fetching process (so this is a good place for it)
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
        </div>

        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// Instead of all this boilerplate...
// function mapDispatchToProps(dispatch) {
//   // When fetchPosts (props) is called this returns/calls fetchPosts action creator
//   // dispatch makes sure that the action flows down to the reducers
//   // ...it binds the action creator(s) to reducers.
//   return bindActionCreators({ fetchPosts }, dispatch); // ES6 shorthand for { fetchPosts: fetchPosts }
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);

// We can use this shorthand
export default connect(mapStateToProps, { fetchPosts })(PostsIndex); // ES6 shorthand for { fetchPosts: fetchPosts }