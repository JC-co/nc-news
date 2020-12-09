import React, { Component } from "react";
import { Link } from "@reach/router";
import { getComments } from "../api";
import ArticleCard from "./ArticleCard";

class ArticleFocus extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    // Q: how is "article_id" stored in the props?
    getComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        <ArticleCard />
      </div>
    );
  }
}

export default ArticleFocus;
