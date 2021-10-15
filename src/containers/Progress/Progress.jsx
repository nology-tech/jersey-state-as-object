import React, { useState } from "react";
import "./Progress.scss";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ProgressWheel from "../../components/ProgressWheel/ProgressWheel";

const Progress = () => {
  const defaultState = { count: 0, progressBy: 10 };
  const [progressData, setProgressData] = useState(defaultState);
  const { count, progressBy } = progressData;

  const handleIncrement = () => {
    const sum = count + progressBy;
    const progressTo = sum < 100 ? sum : 100;
    setProgressData({ ...progressData, count: progressTo });
  };

  const handleDecrement = () => {
    const sum = count - progressBy;
    const progressTo = sum > 0 ? sum : 0;
    setProgressData({ ...progressData, count: progressTo });
  };

  const handleChange = event => {
    const userInput = +event.target.value;
    setProgressData({ ...progressData, progressBy: userInput });
  };

  return (
    <div className="progress">
      <ProgressBar
        count={count}
        progressBy={progressBy}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleChange={handleChange}
      />
      <ProgressWheel count={count} />
    </div>
  );
};
export default Progress;
