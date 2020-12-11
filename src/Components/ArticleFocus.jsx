import React, { Component } from "react";
import { Link } from "@reach/router";
import { getComments, getSingleArticle } from "../api";
import ArticleCard from "./ArticleCard";
import { convertDate } from "../Utils/utilFunctions";
import { UserContext } from "../Context/User";

class ArticleFocus extends Component {
  state = {
    article: {},
    comments: [],
    isArticleLoading: true,
    isCommentsLoading: true,
  };

  componentDidMount() {
    getComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isCommentsLoading: false });
    });
    getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article, isArticleLoading: false });
    });
  }
  
  postComment = (body) => {

  }

  render() {
    const {
      article,
      comments,
      isCommentsLoading,
      isArticleLoading,
    } = this.state;
    const { loggedInUser } = this.context;
    if (isCommentsLoading || isArticleLoading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        {/* Use ArticleCard id to alter look from Articles listed on front page */}
        <ArticleCard
          id={article.article_id}
          key={article.article_id}
          {...article}
        />
        {loggedInUser ? (
          <div>
            <textarea></textarea>
            <button onClick={this.postComment()}>Submit</button>
          </div>
        ) : null}
        <ul id="comments">
          {comments.map((comment) => (
            <li key={comment.comment_id} className="comment">
              <p>Submitted by: {comment.author}</p>
              <p>{convertDate(comment.created_at)}</p>
              <p>{comment.body}</p>
              <p>{comment.votes}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ArticleFocus.contextType = UserContext;

export default ArticleFocus;
