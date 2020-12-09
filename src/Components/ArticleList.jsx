import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    isLoading: true,
  };

  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        <ul>
          {articles.map((singleArticle) => {
            return (
              <ArticleCard key={singleArticle.article_id} {...singleArticle} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
