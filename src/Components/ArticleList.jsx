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
    return (
      <div>
        <ArticleCard key="1" />
      </div>
    );
  }
}

export default ArticleList;
