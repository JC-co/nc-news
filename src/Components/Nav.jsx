import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import Login from "./Login";
import Switch from "../Utils/switch";
import { getTopics } from "../api";
import northcodersLogo from "../Assets/Northcoders - Logo - Red.png";
import { UserContext } from "../Context/User";

// Can also write as <React.Component> and not de-structure "Component" on Line 1.
class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
    darkMode: false,
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  darkMode = () => {
    this.setState({ darkMode: true });
  };

  lightMode = () => {
    this.setState({ darkMode: false });
  };

  render() {
    const { topics, isLoading, darkMode } = this.state;
    const { loggedInUser, login, logout } = this.context;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <NavTop>
          <Link to="/">
            <NavLogo src={northcodersLogo} alt="Northcoders logo" />
          </Link>

          <Link to="/">
            <NavTitle>NC News</NavTitle>
          </Link>

          {darkMode ? (
            <NavSwitch>
              Dark Mode:
              <Switch round onClick={() => this.lightMode()} />
            </NavSwitch>
          ) : (
            <NavSwitch>
              Dark Mode:
              <Switch round onClick={() => this.darkMode()} />
            </NavSwitch>
          )}

          {loggedInUser ? (
            <div>
              <p>Welcome {loggedInUser}</p>
              <NavLogin onClick={() => logout()}>Log Out</NavLogin>
            </div>
          ) : (
            <div>
              <NavLogin onClick={() => login("Joe")}>Log In</NavLogin>
            </div>
          )}
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
  border: 1px solid #d20000;
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 75px 1fr 50px 50px;
  grid-template-areas: "logo title switch login";
`;

const NavBottom = styled.div`
  height: 30px;
  background-color: #d20000;
  color: #f5f5f5;
  /* border: 1px solid purple; */
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
  font-size: 2.5em;
  text-align: left;
  margin: 0;
  color: #080a15;
  /* border: 2px solid green; */
  align-self: center;
  grid-area: title;
`;

const NavSwitch = styled.div`
  font-size: 0.8em;
  padding: 2px;
  margin: 5px;
  grid-area: switch;
`;

const NavLogo = styled.img`
  max-height: 60%;
  padding: 10px;
  margin-left: -5px;
  /* border: 2px solid blue; */
  grid-area: logo;
`;

const NavLogin = styled.button`
  font-size: 0.8em;
  border-radius: 8px;
  padding: 2px;
  margin: 5px;
  grid-area: login;
`;

Nav.contextType = UserContext;

export default Nav;
