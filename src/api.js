import axios from "axios";

const ncNewsApi = axios.create({
  baseUrl: "https://nc-news-byjc.herokuapp.com/api/",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then((data) => {
    console.dir(data);
    return data;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then((data) => {
    console.dir(data);
    return data;
  });
};
