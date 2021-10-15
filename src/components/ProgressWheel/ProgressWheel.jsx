import React from "react";
import "./ProgressWheel.scss";
const ProgressWheel = props => {
  const { count } = props;
  const widthPercent = `${count}%`;

  const inlineStyles = {
    background: `conic-gradient(#00a8ff ${widthPercent}, white ${widthPercent} )`,
  };
  return <div className="progress-wheel" style={inlineStyles}></div>;
};
export default ProgressWheel;
