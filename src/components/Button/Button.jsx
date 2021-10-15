import React from "react";
import  "./Button.scss";

const Button = (props) => {
  const { text, buttonType, borderButton, clicked } = props;

  const buttonStyle = ["button"];

  if (buttonType) buttonStyle.push(buttonType);

  if (borderButton) buttonStyle.push("border-button");

  return (
    <button onClick={clicked} className={buttonStyle.join(" ")}>
      {text || "submit"}
    </button>
  );
};

export default Button;
