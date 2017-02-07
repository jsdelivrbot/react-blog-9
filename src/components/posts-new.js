import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; // reduxForm object is almost identical to the connect() function from react-redux
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // ES6 short for const handleSubmit = this.props.handleSubmit
    // ES6 short for const title = this.props.fields.title...
    // title, categories and content are redux-form configuration objects

    return (
      // onSubmit={handleSubmit} · on form submission the control is passed onto redux-form (to run it's validations etc.)
      // Optionally we can pass an action creator to handleSubmit(someActionCreator) which will be called (with the properties from the form) when the form gets submitted (and is valid)
      // {...title} · binding a specific form field to the relevant redx-form configuration object
      // {...title} · 'de-structuring' the title object · every single property (key + value) of title object will be visible on the <input>
      // Note: can also pass in an optional
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}


// connect(): 1st argument is mapStateToProps · 2nd argument is mapDispatchToProps
// reduxForm(): 1st argument is the config · 2nd argument is mapStateToProps · 3rd argument is mapDispatchToProps

// Passing in reduxForm configuration...
// · what the form is going to be called
// · the name of the fields reduxForm needs to be in charge
// In practise reduxForm() injects helper methods into our PostsNew component (available as this.props...)
// One of those helpers is handleSubmit()
export default reduxForm({
  form: 'PostsNewForm', // The name of the form doesn't need to match the name of the component
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew); // { createPost } === { createPost: createPost } === shorthand for mapDispatchToProps()...
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