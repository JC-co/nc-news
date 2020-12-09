import React from "react";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  const { votes, title, author, topic, created_at, article_id } = props;
  return (
    <div>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{votes}</p>
      <p>{author}</p>
      <p>{topic}</p>
      <p>{created_at}</p>
    </div>
  );
};

export default ArticleCard;
