import React from "react";
import styled from "styled-components";
import obiWanConfusion from "../Assets/obiwanconfused-smallwcomp.jpg";

export const ErrorMsg = (props) => {
  return (
    <div>
      <h1>{props.errorMsg}</h1>
      <ErrImg src={obiWanConfusion} alt="confused Obi Wan" />
    </div>
  );
};

const ErrImg = styled.img`
  width: 100vw;
`;

export default ErrorMsg;
