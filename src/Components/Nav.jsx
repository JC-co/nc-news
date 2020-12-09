import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import Login from "./Login";
import { getTopics } from "../api";
import northcodersLogo from "../Assets/Northcoders - Logo - Red.png";

// Can also write as <React.Component> and not de-structure "Component" on Line 1.
class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
    theme: day,
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <NavTop>
          <Link to="/">
            <NavLogo src={northcodersLogo} alt="Northcoders logo" />
          </Link>
          <NavTitle>NC NEWS</NavTitle>
          <NavLogin>Log In</NavLogin>
        </NavTop>
        <NavBottom>
          {topics.map((topicEach) => (
            <Link key={topicEach.slug} to={`/topic/${topicEach.slug}`}>
              {topicEach.slug}
            </Link>
          ))}
        </NavBottom>
      </div>
    );
  }
}

//CSS

const NavTop = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  border: 2px solid red;
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 75px 1fr 25px;
  grid-template-areas: "logo title login";
`;

const NavBottom = styled.div`
  background-color: #d20000;
  color: #f5f5f5;
  border: 2px solid purple;
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

const NavTitle = styled.header`
  font-size: 4em;
  text-align: center;
  width: 50vw;
  margin: 0 auto;
  color: #080a15;
  border: 2px solid green;
  align-self: center;
  grid-area: title;
`;

const NavLogo = styled.img`
  max-height: 60%;
  padding: 10px;
  // vvv CHECK IF THIS WORKS!!
  margin-left: -10px;
  border: 2px solid blue;
  grid-area: logo;
`;

const NavLogin = styled.button`
  border-radius: 8px;
  height: 40%;
  padding: 10px;
  margin: 0;
  grid-area: login;
`;

export default Nav;
