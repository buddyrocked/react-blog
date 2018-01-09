import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        { field.meta.touched ? field.meta.error : '' }
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Back To List
        </Link>
        <hr />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">submit</button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = 'enter title';
  }
  if(!values.categories){
    errors.categories = 'enter categories';
  }
  if(!values.content){
    errors.content = 'enter content';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
}) (PostsNew);
