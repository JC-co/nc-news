import React from "react";
import styled from "styled-components";

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
`;

const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;

  transition: 0.4s;

  cursor: pointer;
  background-color: #ccc;
  border-radius: ${(p) => (p.round ? 34 : 0)};

  ${Checkbox}:checked + & {
    background-color: #d20000;
  }

  ${Checkbox}:focus + & {
    box-shadow: 0 0 1px #d20000;
  }

  &:before {
    position: absolute;
    content: "";
    left: 4px;
    bottom: 3px;

    transition: 0.3s;

    height: 16px;
    width: 16px;
    background-color: white;
    border-radius: ${(p) => (p.round ? "50%" : "0")};

    ${Checkbox}:checked + & {
      transform: translateX(24px);
    }
  }
`;

const Switch = ({ round, ...props }) => (
  <Wrapper>
    <Checkbox {...props} />
    <Slider round={round} />
  </Wrapper>
);

export default Switch;
