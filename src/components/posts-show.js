import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';


class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const { post } = this.props; // const props = this.props.post (ES6)

    // It takes some time to fetch data from the API
    // The component rendering will not wait for it
    // This is a way to handle the time inbetween (null props)
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow); // Shorthand for writing separate mapDispatchToProps...