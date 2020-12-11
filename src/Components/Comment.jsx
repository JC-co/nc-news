import React, { Component } from "react";
import { UserContext } from "../Context/User";

class Comment extends Component {
  state = {
    comment: "",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  handleSubmit = (event) => {
    const { comment } = this.state;
    const { addComment } = this.props;
    const { loggedInUser } = this.context;
    event.preventDefault();
    addComment({ body: comment, username: loggedInUser });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment on this article:
          <textarea
            type="text"
            onChange={this.handleChange}
            value={this.state.comment}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Comment.contextType = UserContext;

export default Comment;
