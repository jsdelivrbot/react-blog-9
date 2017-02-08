import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object // We make the router available (by finding it in the parent components...)
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id) // this comes back with a resolved promise (axios.delete()) so we can chain onto it with .then
      .then(() => { this.context.router.push('/'); }); // ...so we can use router here (this is how we redirect without <Link>)
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
        <Link to="/">Back To Index</Link>
        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">
          Delete Post
        </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow); // Shorthand for writing separate mapDispatchToProps...