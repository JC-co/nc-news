import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import Login from "./Login";
import northcodersLogo from "../Assets/Northcoders - Logo - Red.png";

// Can also write as <React.Component> and not de-structure "Component" on Line 1.
class Nav extends Component {
  state = {
    isLoading: true,
    theme: day,
  };

  render() {
    return (
      <div>
        <NavTop>
          <Link path="/">
            <img src={northcodersLogo} alt="Northcoders logo" />
            <NavTitle>NC NEWS</NavTitle>
            <NavLogin>Log In</NavLogin>
          </Link>
        </NavTop>
        <NavBottom></NavBottom>
      </div>
    );
  }
}

//CSS

const NavTop = styled.div`
  color: ${props.theme.fg};
  border: 2px solid red;
  background: ${(props) => props.theme.bg};
`;

const day = {
  fg: rgb(8, 10, 21),
  bg: white,
  text: black,
};

const night = ({ fg, bg }) => ({
  fg: white,
  bg: rgb(8, 10, 21),
  text: white,
});

const NavTitle = styled.header`
  color: rgb(8, 10, 21);
`;

const NavLogin = styled.button``;

const NavBottom = styled.div`
  background-color: rgb(194, 0, 0);
`;

export default Nav;
