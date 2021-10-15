import React from "react";
import "./ProgressBar.scss";

import Button from "../Button/Button";
const ProgressBar = props => {
  const { count, handleIncrement, handleDecrement, progressBy, handleChange } = props;

  const widthPercent = `${count}%`;
  const inlineStyles = { width: widthPercent };

  return (
    <section className="progress-bar">
      <p className="progress-bar__display">{count}</p>
      <div className="progress-bar__outer-bar">
        <div className="progress-bar__inner-bar" style={inlineStyles}></div>
      </div>
      <div className="progress-bar__inputs">
        <Button text="-" clicked={handleDecrement} borderButton="true" buttonType="secondary" />
        <input className="progress-bar__input" type="number" value={progressBy} onChange={handleChange} />
        <Button text="+" clicked={handleIncrement} borderButton={true} />
      </div>
    </section>
  );
};
export default ProgressBar;
