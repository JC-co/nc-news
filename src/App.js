import "./App.css";
import Nav from "./Components/Nav";
import ArticleList from "./Components/ArticleList";
import ErrorHandling from "./Components/ErrorHandling";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <ArticleList path="/" />
        <ErrorHandling
          default
          errorMsg="This isn't the page you're looking for"
        />
      </Router>
    </div>
  );
}

export default App;
