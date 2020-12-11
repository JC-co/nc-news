import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-byjc.herokuapp.com/api",
});

export const getArticles = (sort_by, order) => {
  return ncNewsApi
    .get("/articles", {
      params: {
        sort_by: sort_by,
        order: order,
      },
    })
    .then(({ data }) => {
      console.dir(data);
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    console.dir(data);
    return data.article;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    console.dir(data);
    return data.topic;
  });
};

export const getComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    console.dir(data);
    return data.comments;
  });
};

export const postComment = (comment, article_id) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`)
    .send(comment)
    .then(({ response }) => {
      return response.new_comment;
    });
};
