import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Back To List
        </Link>
        <div>PostsNew!</div>
      </div>
    );
  }
}

export default PostsNew;
