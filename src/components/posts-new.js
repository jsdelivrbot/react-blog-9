import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; // reduxForm object is almost identical to the connect() function from react-redux


class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// Passing in reduxForm configuration...
// · what the form is going to be called
// · the name of the fields reduxForm needs to be in charge
export default reduxForm({
  form: 'PostsNewForm', // The name of the form doesn't need to match the name of the component
  fields: ['title', 'categories', 'content']
})(PostsNew);
// Whenever the user changes the values of any of these inputs, redux form sets those values in our global application state
// state === {
//   form: {
//     PostsNewForm: {
//       title: '....',
//       categories: '....',
//       content: '....'
//     }
//   }
// }

// In our older apps we used to record form user input state locally in the component
// redux-form records the form 'state' into global state instead