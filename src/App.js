import "./App.css";
import Nav from "./Components/Nav";
import ArticleList from "./Components/ArticleList";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <ArticleList Link="/" />
      </Router>
    </div>
  );
}

export default App;
