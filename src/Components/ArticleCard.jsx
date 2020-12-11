import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { convertDate } from "../Utils/utilFunctions";
import { UserContext } from "./Nav";

const ArticleCard = (props) => {
  const {
    votes,
    title,
    author,
    topic,
    created_at,
    article_id,
    comment_count,
  } = props;
  return (
    <Card>
      <p>{votes}</p>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{topic}</p>
      <Link to={`/articles/${article_id}`}>
        <p>{comment_count} comments</p>
      </Link>
      <p>{author}</p>
      <p>Posted at {convertDate(created_at)}</p>
    </Card>
  );
};

const Card = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  border: 1px solid #080a15;
  border-radius: 8px;
  margin: 5px;
  align-self: center;
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 75px 2fr 1fr 1fr;
  grid-template-areas:
    "votes title title topic"
    "votes comments author created";
`;

const day = {
  fg: "#080A15",
  bg: "#f5f5f5",
  text: "black",
};

const night = ({ fg, bg }) => ({
  fg: "#f5f5f5",
  bg: "#080A15",
  text: "white",
});

export default ArticleCard;
