import React from "react";
import obiWanConfusion from "../Assets/obiwanconfused.jpg";

export const ErrorMsg = (props) => {
  return (
    <div>
      <h2>{props.errorMsg}</h2>
      <img src={obiWanConfusion} alt="confused Obi Wan" />
    </div>
  );
};

export default ErrorMsg;
