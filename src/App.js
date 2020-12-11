import "./App.css";
import React from "react";
import Nav from "./Components/Nav";
import ArticleList from "./Components/ArticleList";
import ArticleFocus from "./Components/ArticleFocus";
import ErrorHandling from "./Components/ErrorHandling";
import { Router } from "@reach/router";
import { UserContext } from "../src/Context/User";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  login = (user) => {
    this.setState({ loggedInUser: user });
  };

  logout = () => {
    this.setState({ loggedInUser: null });
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <UserContext.Provider
        value={{ loggedInUser, login: this.login, logout: this.logout }}
      >
        <div className="App">
          <Nav />
          <Router>
            <ArticleList path="/" />
            <ArticleFocus path="/articles/:article_id" />
            {/* <TopicList path="/topics/:slug" /> */}
            <ErrorHandling
              default
              errorMsg="This isn't the page you're looking for..."
            />
          </Router>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
